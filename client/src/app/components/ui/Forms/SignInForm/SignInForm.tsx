import React from "react";
import { useLocation } from "react-router-dom";
import { useForm } from "../../../../hooks";
import { SignInDataType } from "../../../../types/types";
import Button from "../../../common/Button";
import { TextField } from "../../../common/Fields";
import { validatorConfig } from "./validatorConfig";

const initialData: SignInDataType = {
    email: "",
    password: ""
};

const SignInForm: React.FC = () => {
    const {
        data,
        errors,
        handleChange,
        validate,
        handleResetForm,
        handleKeyDown
    } = useForm(initialData, false, validatorConfig);
    const location = useLocation();

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (validate(data)) {
            const redirect = location.state
                ? location.state.from.pathname
                : "/";
            handleResetForm(event);
        }
    };

    return (
        <form
            className={"login-form"}
            onSubmit={handleSubmit}
            onKeyDown={handleKeyDown}
        >
            <TextField
                autoFocus
                name="email"
                label="Email..."
                icon="email"
                value={data.email}
                error={errors.email}
                onChange={handleChange}
                className="login-form__item"
            />
            <TextField
                name="password"
                type="password"
                label="Пароль..."
                icon="password"
                value={data.password}
                error={errors.password}
                onChange={handleChange}
                className="login-form__item"
            />
            <Button type="submit" className="login-form__btn">
                Войти
            </Button>
        </form>
    );
};

export default SignInForm;
