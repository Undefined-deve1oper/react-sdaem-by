import React, { useState } from "react";
import PropTypes from "prop-types";
import {
    TextField as TextFieldMui,
    IconButton,
    FormControl,
    InputAdornment,
    OutlinedInput,
    InputLabel
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const TextField = ({
    name,
    label,
    onChange,
    value,
    type,
    errorMessage,
    ...rest
}) => {
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => {
        setShowPassword((prevState) => !prevState);
    };
    return (
        <>
            {type === "password" ? (
                <FormControl
                    sx={{ width: "25ch" }}
                    variant="outlined"
                    error={Boolean(errorMessage)}
                    helperText={errorMessage}
                >
                    <InputLabel
                        htmlFor="outlined-adornment-password"
                        error={Boolean(errorMessage)}
                        helperText={errorMessage}
                    >
                        {label}
                    </InputLabel>
                    <OutlinedInput
                        name={name}
                        id="outlined-adornment-password"
                        type={showPassword ? "text" : "password"}
                        value={value}
                        onChange={onChange}
                        error={Boolean(errorMessage)}
                        helperText={errorMessage}
                        label="Password"
                        {...rest}
                        endAdornment={
                            <InputAdornment
                                position="end"
                                error={Boolean(errorMessage)}
                                helperText={errorMessage}
                            >
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleShowPassword}
                                    onMouseDown={handleShowPassword}
                                    edge="end"
                                >
                                    {showPassword ? (
                                        <VisibilityOff />
                                    ) : (
                                        <Visibility />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
            ) : (
                <TextFieldMui
                    onChange={onChange}
                    name={name}
                    id={name}
                    label={label}
                    variant="outlined"
                    value={value}
                    className="mui-input"
                    type={type}
                    error={Boolean(errorMessage)}
                    helperText={errorMessage}
                    {...rest}
                />
            )}
        </>
    );
};

TextField.defaultProps = {
    type: "text"
};

TextField.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string,
    errorMessage: PropTypes.string
};

export default React.memo(TextField);
