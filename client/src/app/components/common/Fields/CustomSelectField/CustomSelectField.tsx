import React, { FC, ChangeEvent } from "react";
import IconSvg from "../../IconSvg";

type SelectFieldType = {
    label?: string;
    value?: string | number;
    onChange?: (event: any) => void;
    defaultValue?: string;
    error?: string;
    name: string;
    className?: string;
    icon?: string;
    options: OptionsItemType[];
};

export type OptionsItemType = {
    name: string;
    value: string | number | OptionSortType | { path: string; order: string };
};

export type OptionSortType = {
    name: string;
    value: {
        path: string;
        order: string;
    };
};

const CustomSelectField: FC<SelectFieldType> = ({
    label,
    value,
    onChange,
    defaultValue,
    options,
    name,
    error,
    className = "",
    icon,
    ...rest
}) => {
    const optionsArray = options.map((option) => ({
        name: option.name,
        value:
            typeof option.value === "object"
                ? JSON.stringify(option.value)
                : option.value
    }));

    const getInputClasses = (hasError: boolean) => {
        return "form-select" + (hasError ? " is-invalid" : "");
    };

    return (
        <div className={className + "custom-select"}>
            <label htmlFor={name} className="form-label">
                {label}
            </label>
            <div className="custom-select__content">
                <select
                    className={getInputClasses(!!error)}
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    {...rest}
                >
                    <option disabled value="">
                        {defaultValue}
                    </option>
                    {optionsArray.length > 0 &&
                        optionsArray.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.name}
                            </option>
                        ))}
                </select>
                {icon && <IconSvg name={icon} />}
            </div>
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};

export default CustomSelectField;
