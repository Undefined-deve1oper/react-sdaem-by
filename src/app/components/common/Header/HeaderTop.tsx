import React from "react";
import { NavLink } from "react-router-dom";
import { RoutesLinksType } from "../../../router/routes";
import NavList from "../NavList";
import Bookmark from "../Bookmark";
import Burger from "../Burger";

type HeaderTopProps = {
    open: boolean;
    handleToggleMenu: () => void;
    links: RoutesLinksType[];
};

const HeaderTop: React.FC<HeaderTopProps> = ({
    open,
    handleToggleMenu,
    links
}) => {
    return (
        <div className="header__top top-header">
            <div className="top-header__container _container">
                <Burger open={open} onToggleMenu={handleToggleMenu} />
                <NavList routes={links} className={"top-header__menu menu"} />
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
    );
};

export default HeaderTop;
