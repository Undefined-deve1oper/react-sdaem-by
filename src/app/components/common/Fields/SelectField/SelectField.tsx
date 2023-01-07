import React from "react";
import Select, { OnChangeValue } from "react-select";
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
    const onChange = (option: OnChangeValue<IOption, boolean>) => {
        console.log(option);

        if (option !== null) {
            onSelectChange?.({ name, value: option!.value });
        }
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
                // isLoading
            />
        </div>
    );
};

export default React.memo(SelectField);
