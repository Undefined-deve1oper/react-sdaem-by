import React from "react";
import Select, { OnChangeValue, SingleValue } from "react-select";
import { IOption } from "../../../../types/select";
import { HandleChangeDataType } from "../../../../types/types";

type SelectFieldType = {
    name: string;
    label?: string;
    value?: string;
    placeholder?: string;
    error?: string;
    closeMenuOnSelect?: boolean;
    options: IOption[];
    className?: string;
    onSelectChange?: (option: HandleChangeDataType) => void;
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
    const onChange = (option: SingleValue<IOption>) => {
        onSelectChange?.({ name, value: option!.value });
    };
    const isLoading = options.length === 0;

    return (
        <div className={className || ""} {...rest}>
            <label htmlFor={name}>{label}</label>
            <Select
                classNamePrefix="custom-select"
                closeMenuOnSelect={closeMenuOnSelect}
                placeholder={placeholder}
                onChange={onChange}
                options={options}
                isLoading={isLoading}
            />
        </div>
    );
};

export default React.memo(SelectField);
