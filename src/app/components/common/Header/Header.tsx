import React from 'react';
import NavList from "../NavList";
import {navigationRoutes} from "../../../router/routes";
import HeaderTop from "./HeaderTop";

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header__wrapper lock-padding">
                <HeaderTop links={navigationRoutes}/>
            </div>
        </header>
    );
};

export default Header;