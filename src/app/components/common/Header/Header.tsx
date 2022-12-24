import React, {useState} from 'react';
import {navigationRoutes, productsNavigationRoutes} from "../../../router/routes";
import HeaderTop from "./HeaderTop";
import HeaderBody from "./HeaderBody";
import PhoneMenu from "../../ui/PhoneMenu";

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleOpenMenu = () => {
        setIsMenuOpen((prevState) => !prevState);
    };
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="header">
            <div className="header__wrapper lock-padding">
                <HeaderTop links={navigationRoutes}/>
                <HeaderBody links={productsNavigationRoutes}/>
            </div>
            <PhoneMenu closeMenu={closeMenu} open={isMenuOpen} />
        </header>
    );
};

export default Header;