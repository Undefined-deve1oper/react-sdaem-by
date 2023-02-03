import React from "react";
import { NavLink } from "react-router-dom";
import { RoutesLinksType } from "../../../router";
import IconSvg from "../IconSvg";

type NavItemProps = {
    route: RoutesLinksType;
};

const NavItem: React.FC<NavItemProps> = ({ route }) => {
    return (
        <li className="menu__item">
            <NavLink
                className={({ isActive }) =>
                    `menu__link ${isActive ? "_active" : ""}`
                }
                to={route.path}
            >
                {route.icon && <IconSvg name={route.icon} svgClass={"icon"} />}
                {route.item}
            </NavLink>
        </li>
    );
};

export default NavItem;
