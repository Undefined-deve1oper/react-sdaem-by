import React from "react";
import Logo from "../../Logo";
import { NavLink } from "react-router-dom";
import Loader from "../../Loader";
import { api } from "../../../../types/enums";
import { useRequest } from "../../../../hooks/useRequest";
import Dropdown from "../../Dropdown";

const HeaderBody: React.FC = () => {
    const { data, loading, error } = useRequest(api.menuList);

    return (
        <div className="header__body body-header">
            <div className="header__container _container">
                <Logo />
                <nav className="header__menu menu">
                    {loading && <Loader count={4} />}
                    {error ? (
                        <span className="error">
                            Ошибка сервера, попробуйте обновить страницу
                        </span>
                    ) : (
                        <Dropdown data={data} />
                    )}
                </nav>
                <div className="header__ads ads-header">
                    <NavLink className="ads-header__button" to="/place-an-ad">
                        + Разместить объявление
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default HeaderBody;
