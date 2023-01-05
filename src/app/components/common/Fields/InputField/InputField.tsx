import React from "react";
import { TextField, TextFieldProps as MuiTextFieldProps } from "@mui/material";

type InputTypes = {
    type?: string;
    label?: string;
    name: string;
    placeholder?: string;
    value?: string;
    error?: string | null;
    autoFocus?: boolean;
} & MuiTextFieldProps;

const InputField: React.FC<InputTypes> = ({
    placeholder,
    label,
    type = "text",
    name,
    value,
    onChange,
    error = null,
    variant = "outlined",
    className,
    ...rest
}) => {
    return (
        <div className={className || ""}>
            <label htmlFor={name}>{label}</label>
            <TextField
                className={"input-base"}
                variant={variant}
                label={placeholder}
                name={name}
                value={value}
                onChange={onChange}
                type={type}
                error={Boolean(error)}
                helperText={error}
                {...rest}
            />
        </div>
    );
};

export default React.memo(InputField);
