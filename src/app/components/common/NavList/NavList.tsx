import React from "react";
import { RoutesLinksType } from "../../../router/mainRoutes";
import NavItem from "../NavItem";

type NavListProps = {
    routes: RoutesLinksType[];
    label?: string;
    closeMenu?: () => void;
    direction?: "row" | "column";
    className?: string;
};

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
            <ul className="menu__list" style={{ flexDirection: direction }}>
                {routes.map((route) => (
                    <NavItem
                        closeMenu={closeMenu}
                        key={route.path}
                        route={route}
                    />
                ))}
            </ul>
        </nav>
    );
};

export default NavList;
