import React from 'react';
import {navigationRoutes, productsNavigationRoutes} from "../../../router/routes";
import HeaderTop from "./HeaderTop";
import HeaderBody from "./HeaderBody";

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header__wrapper lock-padding">
                <HeaderTop links={navigationRoutes}/>
                <HeaderBody links={productsNavigationRoutes}/>
            </div>
        </header>
    );
};

export default Header;