import React from "react";
import Select, { GroupBase } from "react-select";

type SelectFieldType = {
    label?: string;
    value?: string;
    onChange?: () => void;
    defaultValue?: string;
    error?: string;
    name: string;
    closeMenuOnSelect?: boolean;
    options: OptionsItemType[];
    className?: string;
    multiple?: boolean;
};

export type OptionsItemType = {
    label: string;
    value: string;
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
    const handleChange = (target: any) => {
        onChange({ name, value: target.value });
    };

    return (
        <div className={className || ""} {...rest}>
            <label htmlFor={name}>{label}</label>
            <Select
                classNamePrefix="custom-select"
                closeMenuOnSelect={closeMenuOnSelect}
                placeholder={defaultValue}
                options={options}
                onChange={handleChange}
                value={value}
            />
        </div>
    );
};

export default React.memo(SelectField);
