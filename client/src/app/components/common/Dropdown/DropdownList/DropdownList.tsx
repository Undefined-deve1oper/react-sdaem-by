import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import IconSvg from "../../IconSvg";

export interface IListDropdown {
    title: string;
    isIcon?: boolean;
    list: {
        id: number;
        value: string;
        label: string;
        city: string;
        path: string;
    }[];
}
export interface IPropsDropdown {
    menu: IListDropdown;
}

export const DropdownList: React.FC<IPropsDropdown> = ({ menu }) => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const handleClickOutsideDropdown = (e: MouseEvent) => {
            const path = e.composedPath();
            if (path[0] !== ref?.current) {
                setIsOpen(false);
            }
        };
        window.addEventListener("click", handleClickOutsideDropdown);
        return () => {
            window.removeEventListener("click", handleClickOutsideDropdown);
        };
    }, []);

    return (
        <button
            className={"menu__item"}
            ref={ref}
            onClick={() => setIsOpen((prevState) => !prevState)}
        >
            {menu?.title}
            {menu?.isIcon && <IconSvg name={"mark"} svgClass={"icon"} />}
            {isOpen && (
                <ul className={"dropdown-list"}>
                    {menu?.list.map((item) => (
                        <li key={item.city} className={"dropdown-list__item"}>
                            <NavLink
                                to={item.path}
                                className={"dropdown-list__link"}
                            >
                                {item.value}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            )}
        </button>
    );
};
