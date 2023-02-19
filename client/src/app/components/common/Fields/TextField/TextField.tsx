import React, { useState } from "react";
import Button from "../../Button";
import IconSvg from "../../IconSvg";

export type TextFieldTypes = {
    type?: string;
    label?: string;
    name: string;
    placeholder?: string;
    value?: string;
    error?: string | null;
    autoFocus?: boolean;
    onChange?: (target: any) => void;
    className?: string;
    icon?: string;
};

const TextField: React.FC<TextFieldTypes> = ({
    label,
    type = "text",
    name,
    value,
    onChange,
    error = null,
    className = "",
    icon,
    ...rest
}) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword((prevState) => !prevState);
    };

    return (
        <div className={className + ` text-field ${error ? " error" : ""}`}>
            <div className="text-field__content">
                {type === "password" ? (
                    <>
                        <input
                            name={name}
                            id={name}
                            type={showPassword ? "text" : "password"}
                            onChange={onChange}
                            value={value}
                            placeholder={label}
                            className={`text-field__input`}
                            {...rest}
                        />
                        {icon && (
                            <Button
                                type="button"
                                className="text-field__icon"
                                onClick={handleShowPassword}
                            >
                                <IconSvg name={icon} />
                            </Button>
                        )}
                    </>
                ) : (
                    <>
                        <input
                            name={name}
                            id={name}
                            type={type}
                            onChange={onChange}
                            value={value}
                            placeholder={label}
                            className={`text-field__input`}
                            {...rest}
                        />
                        {icon && (
                            <Button type="button" className="text-field__icon">
                                <IconSvg name={icon} />
                            </Button>
                        )}
                    </>
                )}
            </div>
            {error && <p className="text-field__error error">{error}</p>}
        </div>
    );
};

export default React.memo(TextField);
