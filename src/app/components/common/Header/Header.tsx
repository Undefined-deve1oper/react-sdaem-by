import React, { useState } from "react";
import HeaderTop from "./HeaderTop";
import HeaderBody from "./HeaderBody";
import PhoneMenu from "../../ui/PhoneMenu";
import { headerLinks } from "../../../router/index";
import { useRequest } from "../../../hooks/useRequest";
import Loader from "../Loader";
import { NavLink } from "react-router-dom";
import Bookmark from "../Bookmark";

export interface IHeaderNavData {
    id: number;
    item: string;
    path: string;
    isIcon?: boolean;
}

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header__wrapper lock-padding">
                <HeaderTop />
                <HeaderBody />
            </div>
        </header>
    );
};

export default Header;
