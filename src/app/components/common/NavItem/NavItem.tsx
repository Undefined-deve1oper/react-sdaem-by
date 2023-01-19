import React from "react";
import { RoutesLinksType } from "../../../router/mainRoutes";
import { NavLink } from "react-router-dom";
import Dropdown from "../Dropdown";

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
                {route.item}
            </NavLink>
        </li>
    );
};

export default NavItem;
