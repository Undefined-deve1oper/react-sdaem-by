import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../../common/Button";
import IconSvg from "../../common/IconSvg";

const NotFoundPage: React.FC = () => {
    return (
        <>
            <div className="not-found__main">
                <h3 className="not-found__title">Ошибка 404</h3>
                <div className="not-found__text">
                    Возможно, у вас опечатка в адресе страницы, или её просто не
                    существует
                </div>
                <NavLink to="/" className="not-found__button">
                    <IconSvg name="home-run" />
                    Вернуться на главную
                </NavLink>
            </div>
        </>
    );
};

export default NotFoundPage;
