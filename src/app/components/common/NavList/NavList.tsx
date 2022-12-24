import React from "react";
import {RoutesNavType} from "../../../router/routes";
import NavItem from "../NavItem";
// import NavItem from "../NavItem";

type NavListProps = {
    routes: RoutesNavType[];
    closeMenu?: () => void;
    label?: string;
    direction?: "row" | "column";
    className?: string;
}

const NavList: React.FC<NavListProps> = ({
     routes,
     closeMenu,
     direction = "row",
     label,
     className
}) => {
    return (
        <nav className={className || "menu"}>
            {label && <h3>{label}</h3>}
            <ul className="menu__list" style={{flexDirection: direction}}>
                {routes.map((route) => (
                    <NavItem
                        closeMenu={closeMenu}
                        key={route.name}
                        route={route}
                    />
                ))}
            </ul>
        </nav>
    );
};

export default NavList;
