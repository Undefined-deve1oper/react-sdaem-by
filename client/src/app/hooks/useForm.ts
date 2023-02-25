import React, { useCallback, useState } from "react";
import { validator, ValidatorConfigType } from "../utils/validator";

function useForm<T>(
    initialData: T,
    validateOnChange: boolean,
    validatorConfig: ValidatorConfigType
) {
    const [data, setData] = useState<T>(initialData);
    const [errors, setErrors] = useState<{ [x: string]: string }>({});
    const [enterError, setEnterError] = useState<string | null>(null);

    const validate = useCallback(
        (data: T) => {
            const errors = validator(data, validatorConfig);
            setErrors(errors);
            return Object.keys(errors).length === 0;
        },
        [validatorConfig, setErrors]
    );

    const handleChange = useCallback(
        ({ target }: { target: { name: string; value: string } }) => {
            const nameParts = target.name.split(".");
            const firstLevelName: keyof T = nameParts[0] as keyof T;
            const secondLevelName: keyof T[keyof T] | undefined =
                nameParts[1] as keyof T[keyof T] | undefined;

            if (nameParts.length === 1) {
                setData((prevData) => ({
                    ...prevData,
                    [firstLevelName]: target.value
                }));
            } else if (nameParts.length === 2 && secondLevelName) {
                setData((prevData) => ({
                    ...prevData,
                    [firstLevelName]: {
                        ...prevData[firstLevelName],
                        [secondLevelName]: target.value
                    }
                }));
            }

            setEnterError(null);
            setErrors({});
            if (validateOnChange)
                validate({ [target.name]: target.value } as T);
        },
        [validateOnChange, validate, setData, setEnterError, setErrors]
    );

    const handleKeyDown = useCallback(
        (event: React.KeyboardEvent<HTMLFormElement>) => {
            if (event.keyCode === 13) {
                event.preventDefault();
                const form = event.currentTarget.form;
                const formElements = [...form.elements].filter(
                    (el) =>
                        el.tagName.toLowerCase() === "button" ||
                        el.tagName.toLowerCase() === "input"
                );

                const fieldIndex = Array.prototype.indexOf.call(
                    formElements,
                    event.currentTarget
                );
                formElements[fieldIndex + 1].focus();
            }
        },
        []
    );

    const handleResetForm = (event: React.FormEvent) => {
        event.preventDefault();
        setData(initialData);
        setErrors({});
    };

    return {
        data,
        setData,
        errors,
        enterError,
        handleChange,
        handleKeyDown,
        validate,
        handleResetForm
    };
}

export default useForm;
