import React from "react";
import { NavLink } from "react-router-dom";
import { SignUpForm } from "../../ui/Forms";

type Props = {};

const SignUpPage: React.FC<Props> = (props) => {
    return (
        <div className="sign-up">
            <div className="sign-up__container">
                <div className="sign-up__content">
                    <h1 className="sign-up__title login-title">Регистрация</h1>
                    <SignUpForm />
                </div>
                <div className="sign-up__info">
                    <h3 className="sign-up__subtitle">
                        Пользователь обязуется:
                    </h3>
                    <ul className="sign-up__list">
                        <li className="sign-up__item">
                            предоставлять достоверную и актуальную информацию
                            при регистрации и добавлении объекта;
                        </li>
                        <li className="sign-up__item">
                            добавлять фотографии объектов соответствующие
                            действительности. Администрация сайта sdaem.by
                            оставляет за собой право удалять любую информацию,
                            размещенную пользователем, если сочтет, что
                            информация не соответствует действительности, носит
                            оскорбительный характер, нарушает права и законные
                            интересы других граждан либо действующее
                            законодательство Российской Федерации.
                        </li>
                    </ul>
                    <div className="login-offer">
                        Уже есть аккаунта?{" "}
                        <NavLink to={`/login/signin`}>Войдите</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;
