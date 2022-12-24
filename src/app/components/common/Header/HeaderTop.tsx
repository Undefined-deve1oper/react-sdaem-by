import React from "react";
import { NavLink } from "react-router-dom";
import { Icon, Typography } from "@mui/material";
import { FavoriteBorder } from "@mui/icons-material";
import {RoutesNavType} from "../../../router/routes";
import NavList from "../NavList";
import Bookmark from "../Bookmark";

type HeaderTopProps = {
    links: RoutesNavType[];
}

const HeaderTop: React.FC<HeaderTopProps> = ({ links }) => {
    return (
        <div className="header__top top-header">
            <div className="top-header__container _container">
                <NavList
                    routes={links}
                    className={"top-header__menu menu"}
                />
                <div className="top-header__actions actions-header">
                    <Bookmark label="Закладки"/>
                </div>
                <div className="header-buttons">
                    <NavLink to="/login" className="header-buttons-button">
                        Вход и регистрация
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;
