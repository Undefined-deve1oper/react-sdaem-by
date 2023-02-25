import React, { useCallback } from "react";
import Select, { SingleValue } from "react-select";
import { IOption } from "../../../../types/interfaces";

type SelectFieldType = {
    name: string;
    value?: any;
    placeholder?: string;
    error?: string;
    closeMenuOnSelect?: boolean;
    options: any[];
    className?: string;
    title?: string;
    onSelectChange?: (option: any) => void;
};

const SelectField: React.FC<SelectFieldType> = ({
    name,
    value,
    title,
    onSelectChange,
    options,
    error,
    closeMenuOnSelect = true,
    placeholder = "Выберите",
    className,
    ...rest
}) => {
    const optionsArray = options.map((option) => ({
        label: option.name || option.label,
        value:
            typeof option === "object" ? JSON.stringify(option._id) : option._id
    }));

    const handleChange = useCallback((option: SingleValue<any>) => {
        onSelectChange?.({ target: { name, value: option!.value } });
    }, []);
    const isLoading = options.length === 0;

    return (
        <div className={className + ` ${error ? " error" : ""}`}>
            {title && <h3 className="text-field__title form-title">{title}</h3>}
            <Select
                value={value}
                className={className + " custom-select-container"}
                classNamePrefix="custom-select"
                closeMenuOnSelect={closeMenuOnSelect}
                placeholder={placeholder}
                onChange={handleChange}
                options={optionsArray}
                isLoading={isLoading}
            />
            {error && <p className="text-field__error error">{error}</p>}
        </div>
    );
};

export default React.memo(SelectField);
