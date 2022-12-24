import React from "react";
import { NavLink } from "react-router-dom";
import { Icon, Typography } from "@mui/material";
import { FavoriteBorder } from "@mui/icons-material";
import {RoutesNavType} from "../../../router/routes";
import NavList from "../NavList";

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
                    <div className="actions-header__item favorites-header">
                        <NavLink
                            className="favorites-header__item"
                            to="/bookmarks"
                        >
                            <Typography component="span" variant="inherit">
                                Закладки
                            </Typography>
                            <Icon component={FavoriteBorder} />
                        </NavLink>
                    </div>
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
