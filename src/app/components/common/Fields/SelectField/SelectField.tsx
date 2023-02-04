import React from "react";
import Select, { SingleValue } from "react-select";
import { IOption } from "../../../../types/interfaces";
import { HandleChangeDataType } from "../../../../types/types";

type SelectFieldType = {
    name: string;
    value?: string;
    placeholder?: string;
    error?: string;
    closeMenuOnSelect?: boolean;
    options: IOption[];
    className?: string;
    onSelectChange?: (option: HandleChangeDataType) => void;
};

const SelectField: React.FC<SelectFieldType> = ({
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
        <Select
            className={className + " custom-select-container"}
            classNamePrefix="custom-select"
            closeMenuOnSelect={closeMenuOnSelect}
            placeholder={placeholder}
            onChange={onChange}
            options={options}
            isLoading={isLoading}
        />
    );
};

export default React.memo(SelectField);
