import React from "react";
import { RoutesLinksType } from "../../../router/mainRoutes";
import NavItem from "../NavItem";

type NavListProps = {
    routes: RoutesLinksType[];
    label?: string;
    direction?: "row" | "column";
    className?: string;
};

const NavList: React.FC<NavListProps> = ({
    routes,
    direction = "row",
    label,
    className
}) => {
    return (
        <nav className={className || "menu"}>
            {label && <h3>{label}</h3>}
            <ul className="menu__list" style={{ flexDirection: direction }}>
                {routes.map((route) => (
                    <NavItem key={route.id} route={route} />
                ))}
            </ul>
        </nav>
    );
};

export default NavList;
