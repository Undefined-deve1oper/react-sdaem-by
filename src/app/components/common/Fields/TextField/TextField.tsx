import React, { useState } from "react";

type TextFieldTypes = {
    type?: string;
    label?: string;
    name: string;
    placeholder?: string;
    value?: string;
    error?: string | null;
    autoFocus?: boolean;
    onChange?: (target: any) => void;
    className?: string;
};

const TextField: React.FC<TextFieldTypes> = ({
    label,
    type = "text",
    name,
    value,
    onChange,
    error = null,
    className = "",
    ...rest
}) => {
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => {
        setShowPassword((prevState) => !prevState);
    };

    return (
        <div className="text-field">
            <input
                name={name}
                id={name}
                type={type}
                onChange={onChange}
                value={value}
                placeholder={label}
                className={"text-field__input " + className}
                {...rest}
            />
            {error && <p className="text-field__error error">{error}</p>}
        </div>
    );
};

export default React.memo(TextField);
