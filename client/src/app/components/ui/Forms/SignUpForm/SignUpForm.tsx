import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Reaptcha from "reaptcha";
import { useForm } from "../../../../hooks";
import { getAuthSignUpError, signUp, useAppDispatch } from "../../../../store";
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
    gender: "male"
};

const SignUpForm: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { data, errors, handleChange, validate, handleResetForm } = useForm(
        initialData,
        false,
        validatorConfig
    );
    const [verified, setVerified] = useState(false);
    const loginError = useSelector(getAuthSignUpError());
    const dispatch = useAppDispatch();

    const onVerify = () => {
        setVerified(true);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (validate(data)) {
            const redirect = location.state
                ? location.state.from.pathname
                : "/";
            handleResetForm(event);
            dispatch(signUp(data)).then(() =>
                navigate(redirect, { replace: true })
            );
        }
    };

    const isValid = verified && Object.keys(errors).length === 0;

    return (
        <>
            <form className={"login-form"} onSubmit={handleSubmit}>
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
                <DatePickerField
                    name={"birthYear"}
                    value={data.birthYear}
                    onChange={handleChange}
                    error={errors.birthYear}
                    minDate={new Date("1955-01-01")}
                />
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
                <Reaptcha
                    sitekey="6LdbXDohAAAAAOSRPg7cLWorWEB_GXXS9isiZ-eB"
                    onVerify={onVerify}
                />
                <Button
                    type="submit"
                    disabled={!isValid}
                    className={`login-form__btn ${!isValid ? "disabled" : ""}`}
                >
                    Зарегистрироваться
                </Button>
            </form>
            {loginError && <p className="form-error">{loginError}</p>}
        </>
    );
};

export default SignUpForm;
