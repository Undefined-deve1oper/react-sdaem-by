import React, { useState } from "react";
import HeaderTop from "./HeaderTop";
import HeaderBody from "./HeaderBody";
import PhoneMenu from "../../ui/PhoneMenu";
import { headerLinks } from "../../../router/index";
import { useRequest } from "../../../hooks/useRequest";

export interface IHeaderNavData {
    id: number;
    item: string;
    path: string;
    isIcon?: boolean;
}

const Header: React.FC = () => {
    const { data, loading, error } = useRequest("navigation/");

    return (
        <header className="header">
            <div className="header__wrapper lock-padding">
                <div className="header__container _container"></div>
            </div>
        </header>
    );
};

export default Header;
