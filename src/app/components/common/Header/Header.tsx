import React, { useState } from "react";
import HeaderTop from "./HeaderTop";
import HeaderBody from "./HeaderBody";
import PhoneMenu from "../../ui/PhoneMenu";
import { headerLinks } from "../../../router/index";

const Header: React.FC = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const { navigationLinks, productsLinks } = headerLinks;

    const handleToggleMenu = () => {
        setMenuOpen((prevState) => !prevState);
    };
    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className="header">
            <div className="header__wrapper lock-padding">
                <HeaderTop
                    open={isMenuOpen}
                    handleToggleMenu={handleToggleMenu}
                    links={navigationLinks}
                />
                <HeaderBody links={productsLinks} />
            </div>
            <PhoneMenu closeMenu={closeMenu} open={isMenuOpen} />
        </header>
    );
};

export default Header;
