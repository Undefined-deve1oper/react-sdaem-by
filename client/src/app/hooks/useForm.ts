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
        (data: any) => {
            const errors = validator(data, validatorConfig);
            setErrors(errors);
            return Object.keys(errors).length === 0;
        },
        [validatorConfig, setErrors]
    );

    const handleChange = useCallback(
        ({ target }: { target: { name: string; value: string } }) => {
            setData((prevState) => ({
                ...prevState,
                [target.name]: target.value
            }));
            setEnterError(null);
            setErrors({});
            if (validateOnChange) validate({ [target.name]: target.value });
        },
        [validateOnChange, validate]
    );

    const handleKeyDown = useCallback((event: any) => {
        if (event.keyCode === 13) {
            event.preventDefault();
            const form = event.target.form;
            const formElements = [...form.elements].filter(
                (el) =>
                    el.tagName.toLowerCase() === "button" ||
                    el.tagName.toLowerCase() === "input"
            );
            const fieldIndex = Array.prototype.indexOf.call(
                formElements,
                event.target
            );
            formElements[fieldIndex + 1].focus();
        }
    }, []);

    const handleResetForm = (event: React.FormEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setData(initialData);
        setErrors({});
    };

    return {
        data,
        errors,
        enterError,
        handleChange,
        handleKeyDown,
        validate,
        handleResetForm
    };
}

export default useForm;
