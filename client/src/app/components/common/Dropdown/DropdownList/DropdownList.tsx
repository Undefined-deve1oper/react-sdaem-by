import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useOutside } from "../../../../hooks";
import IconSvg from "../../IconSvg";

export interface IListDropdown {
    title: string;
    isIcon?: boolean;
    list: {
        _id: number;
        value: string;
        label: string;
        path: string;
    }[];
}
export interface IPropsDropdown {
    menu: IListDropdown;
}

export const DropdownList: React.FC<IPropsDropdown> = ({ menu }) => {
    const ref = useRef<HTMLButtonElement>(null);
    const { isOpen, handleOpen } = useOutside(ref);

    return (
        <button className={"menu__item"} ref={ref} onClick={handleOpen}>
            {menu?.title}
            {menu?.isIcon && <IconSvg name={"mark"} svgClass={"icon"} />}
            {isOpen && (
                <ul className={"dropdown-list"}>
                    {menu?.list.map((item) => (
                        <li key={item._id} className={"dropdown-list__item"}>
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
