import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useForm } from "../../../../hooks";
import { UserType } from "../../../../types/types";
import Button from "../../../common/Button";
import {
    DatePickerField,
    RadioGroupField,
    SwitchField,
    TextField
} from "../../../common/Fields";
import { validatorConfig } from "./validatorConfig";

const genderItems = [
    { id: "male", title: "Мужчина" },
    { id: "female", title: "Женщина" }
];

const initialData: UserType = {
    name: "",
    subscribe: false,
    birthYear: Date.now(),
    email: "",
    password: "",
    role: "USER",
    gender: "female"
};

const SignUpForm: React.FC = () => {
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
                name="name"
                label="Имя..."
                icon="user"
                value={data.name}
                error={errors.name}
                onChange={handleChange}
                className="login-form__item"
            />
            <TextField
                name="email"
                type="email"
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
            <DatePickerField value={data.birthYear} />
            <RadioGroupField
                name="gender"
                items={genderItems}
                value={data.gender}
                onChange={handleChange}
                label="Выберите ваш пол"
            />
            <SwitchField
                value={data.subscribe}
                name="subscribe"
                label="Получать спецпредложения"
                onChange={handleChange}
            />
            <Button type="submit" className="login-form__btn">
                Войти
            </Button>
        </form>
    );
};

export default SignUpForm;
