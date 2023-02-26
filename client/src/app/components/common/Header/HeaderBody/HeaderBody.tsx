import React from "react";
import { NavLink } from "react-router-dom";
import data from "../../../../config/nav-menu-config.json";
import Dropdown from "../../Dropdown";
import Logo from "../../Logo";

const HeaderBody: React.FC = () => {
    return (
        <div className="header__body body-header">
            <div className="header__container _container">
                <Logo />
                <nav className="header__menu menu">
                    <Dropdown data={data} />
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
