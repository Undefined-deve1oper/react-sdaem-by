import React from "react";
import { RoutesLinksType } from "../../../router/mainRoutes";
import { NavLink } from "react-router-dom";
import Dropdown from "../Dropdown";

type NavItemProps = {
    route: RoutesLinksType;
    closeMenu?: () => void;
};

const NavItem: React.FC<NavItemProps> = ({ route, closeMenu }) => {
    return (
        <li className="menu__item">
            {route.path && route.submenu ? (
                <Dropdown defaultOption={route} options={route.submenu} />
            ) : (
                <NavLink
                    className={({ isActive }) =>
                        `menu__link ${isActive ? "_active" : ""}`
                    }
                    to={route.path}
                    onClick={closeMenu}
                >
                    {route.title}
                </NavLink>
            )}
        </li>
    );
};

export default NavItem;
