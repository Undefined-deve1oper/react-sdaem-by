import React from "react";
import HeaderBody from "./HeaderBody";
import HeaderTop from "./HeaderTop";

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
