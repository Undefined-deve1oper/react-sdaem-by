import React from 'react';
import {RoutesNavType} from "../../../router/routes";
import {NavLink} from "react-router-dom";

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
            </NavLink>
        </li>
    );
};

export default NavItem;