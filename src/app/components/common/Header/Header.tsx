import React, {useState} from 'react';
import {navigationRoutes, productsNavigationRoutes} from "../../../router/routes";
import HeaderTop from "./HeaderTop";
import HeaderBody from "./HeaderBody";
import PhoneMenu from "../../ui/PhoneMenu";
import Burger from "../Burger";

const Header: React.FC = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleToggleMenu = () => {
        setMenuOpen((prevState) => !prevState);
    };
    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className="header">
            <div className="header__wrapper lock-padding">
                <HeaderTop open={isMenuOpen} handleToggleMenu={handleToggleMenu} links={navigationRoutes}/>
                <HeaderBody links={productsNavigationRoutes}/>
            </div>
            <PhoneMenu closeMenu={closeMenu} open={isMenuOpen}/>
        </header>
    );
};

export default Header;