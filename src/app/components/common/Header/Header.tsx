import React, { useState } from "react";
import HeaderTop from "./HeaderTop";
import HeaderBody from "./HeaderBody";
import PhoneMenu from "../../ui/PhoneMenu";
import { headerLinks } from "../../../router/index";
import { useRequest } from "../../../hooks/useRequest";
import Loader from "../Loader";
import { NavLink } from "react-router-dom";
import Bookmark from "../Bookmark";

export interface IHeaderNavData {
    id: number;
    item: string;
    path: string;
    isIcon?: boolean;
}

const Header: React.FC = () => {
    const { data, loading, error } = useRequest("navigation/");

    return (
        <header className="header">
            <div className="header__wrapper lock-padding">
                <div className="header__container _container">
                    {loading && <Loader />}
                    {error && (
                        <span className="error">
                            Ошибка сервера, попробуйте обновить страницу
                        </span>
                    )}
                    <div className="top-header__actions actions-header">
                        <Bookmark label="Закладки" />
                    </div>
                    <div className="header-buttons">
                        <NavLink to="/login" className="header-buttons-button">
                            Вход и регистрация
                        </NavLink>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
