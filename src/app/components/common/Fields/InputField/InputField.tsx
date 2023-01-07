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
        <TextField
            className={className || "input-base"}
            variant={variant}
            label={label}
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            type={type}
            error={Boolean(error)}
            helperText={error}
            {...rest}
        />
    );
};

export default React.memo(InputField);
