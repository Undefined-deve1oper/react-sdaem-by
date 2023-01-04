import React from "react";
import Select from "react-select";

type SelectFieldType = {
    label?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    defaultValue?: string;
    error?: string;
    name: string;
    closeMenuOnSelect?: boolean;
    options: OptionsItemType[];
    className: string;
}

export type OptionsItemType = {
    label: string;
    value: string | number | { path: string; order: string };
};

const SelectField: React.FC<SelectFieldType> = ({
    label,
    name,
    value,
    defaultValue = "Выберите",
    onChange,
    options,
    error,
    closeMenuOnSelect = true,
    className,
    ...rest
}) => {
    const optionsArray = options.map((option) => ({
        label: option.label,
        value:
            typeof option.value === "object"
                ? JSON.stringify(option.value)
                : option.value
    }));

    return (
        <div className={className || ""} {...rest}>
            <label htmlFor={name}>{label}</label>
            <Select
                classNamePrefix="custom-select"
                closeMenuOnSelect={closeMenuOnSelect}
                placeholder={defaultValue}
                options={optionsArray}
            />
        </div>
    );
};

export default React.memo(SelectField);
