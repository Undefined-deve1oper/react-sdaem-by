import React from "react";

type CheckboxFieldTypes = {
    name?: string;
    value?: boolean;
    onChange: (e: any) => void;
    label: string;
    error?: string;
};

const CheckboxField: React.FC<CheckboxFieldTypes> = ({
    name,
    value,
    onChange,
    label,
    error,
    ...rest
}) => {
    const getInputClasses = () => {
        return "checkbox" + (error ? " error" : "");
    };

    return (
        <>
            <input
                className={getInputClasses()}
                type="checkbox"
                value=""
                id={name}
                name={name}
                checked={value}
                onChange={onChange}
                {...rest}
            />
            <label className="form-check-label" htmlFor={name}>
                {label}
            </label>
            {error && <p className="error">{error}</p>}
        </>
    );
};

export default CheckboxField;
