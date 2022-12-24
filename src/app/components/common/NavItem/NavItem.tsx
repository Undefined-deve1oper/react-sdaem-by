import React from 'react';
import {RoutesNavType} from "../../../router/routes";
import {NavLink} from "react-router-dom";
import {Icon} from "@mui/material";

type NavItemProps = {
    route: RoutesNavType;
    closeMenu?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({route, closeMenu}) => {
    return (
        <li className="menu__item">
            <NavLink
                activeClassName="_active"
                className={"menu__link"}
                to={route.path}
                onClick={closeMenu}
            >
                {route.name}
                {route.icon && <Icon component={route.icon}/>}
            </NavLink>
        </li>
    );
};

export default NavItem;