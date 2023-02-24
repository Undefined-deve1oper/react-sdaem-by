import React from "react";
import { TextFieldTypes } from "../TextField/TextField";

const TextAreaField: React.FC<TextFieldTypes> = ({
    label,
    name,
    value,
    onChange,
    error = null,
    className = "",
    icon,
    title,
    ...rest
}) => {
    return (
        <div className="textarea-field">
            {title && (
                <h3 className="textarea-field__title form-title">{title}</h3>
            )}
            <textarea
                placeholder={label}
                value={value}
                onChange={onChange}
                name={name}
                className={className}
                {...rest}
            />
            {error && <p className="text-field__error error">{error}</p>}
        </div>
    );
};

export default TextAreaField;
