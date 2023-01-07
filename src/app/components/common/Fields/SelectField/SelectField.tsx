import React from "react";
import Select, { OnChangeValue } from "react-select";
import { IOption } from "../../../../types/select";

type SelectFieldType = {
    name: string;
    label?: string;
    value?: string;
    placeholder?: string;
    error?: string;
    closeMenuOnSelect?: boolean;
    options: IOption[] | null;
    className?: string;
    onSelectChange?: (option: object) => object;
};

const SelectField: React.FC<SelectFieldType> = ({
    label,
    name,
    value,
    onSelectChange,
    options,
    error,
    closeMenuOnSelect = true,
    placeholder = "Выберите",
    className,
    ...rest
}) => {
    const onChange = (option: OnChangeValue<IOption, boolean>) => {
        onSelectChange({ name, value: option.value });
    };

    return (
        <div className={className || ""} {...rest}>
            <label htmlFor={name}>{label}</label>
            <Select
                classNamePrefix="custom-select"
                closeMenuOnSelect={closeMenuOnSelect}
                placeholder={placeholder}
                onChange={onChange}
                options={options}
                isLoading
            />
        </div>
    );
};

export default React.memo(SelectField);
