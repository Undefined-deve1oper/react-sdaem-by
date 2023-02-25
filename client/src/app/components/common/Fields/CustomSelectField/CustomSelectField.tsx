import React, { FC, ChangeEvent } from "react";

interface Option {
    label: string;
    value: string;
}

interface Props {
    label: string;
    value: string;
    onChange: (event: { name: string[]; value: string }) => void;
    defaultOption: string;
    options: Option[];
    name: string;
    error?: string;
}

const CustomSelectField: FC<Props> = ({
    label,
    value,
    onChange,
    defaultOption,
    options,
    name,
    error,
    ...rest
}) => {
    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        onChange({ name: [event.target.name], value: event.target.value });
    };
    const getInputClasses = () => {
        return "form-select" + (error ? " is-invalid" : "");
    };

    return (
        <div className="mb-4">
            <label htmlFor={name} className="form-label">
                {label}
            </label>
            <select
                className={getInputClasses()}
                id={name}
                name={name}
                value={value}
                onChange={handleChange}
                {...rest}
            >
                <option disabled value="">
                    {defaultOption}
                </option>
                {options.length > 0 &&
                    options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
            </select>
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};

export default CustomSelectField;
