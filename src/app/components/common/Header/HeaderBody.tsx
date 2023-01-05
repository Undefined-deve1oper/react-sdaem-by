import React from "react";
import Logo from "../Logo";
import { NavLink } from "react-router-dom";
import NavList from "../NavList";
import { RoutesLinksType } from "../../../router/mainRoutes";

type HeaderBodyProps = {
    links: RoutesLinksType[];
};

const HeaderBody: React.FC<HeaderBodyProps> = ({ links }) => {
    return (
        <div className="header__body body-header">
            <div className="header__container _container">
                <Logo />
                <NavList routes={links} className={"header__menu menu"} />
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
