import React from "react";
import HeaderBody from "./HeaderBody";
import HeaderTop from "./HeaderTop";

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
