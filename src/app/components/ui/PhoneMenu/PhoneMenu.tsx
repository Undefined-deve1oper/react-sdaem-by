import React from "react";
import { headerLinks } from "../../../router/index";
import NavList from "../../common/NavList";

interface IPhoneMenu {
    open: boolean;
    closeMenu?: () => void;
}

const PhoneMenu: React.FC<IPhoneMenu> = ({ open, closeMenu }) => {
    const { navigationLinks, productsLinks } = headerLinks;

    return (
        <div className={"header__menu mobile-menu" + (open ? " _active" : "")}>
            <div className="mobile-menu__wrapper">
                <ul className="mobile-menu__list">
                    <li className="mobile-menu__item">
                        <NavList
                            className="mobile-menu__sub-list"
                            direction="column"
                            routes={navigationLinks}
                            closeMenu={closeMenu}
                        />
                    </li>
                    <li className="mobile-menu__item">
                        <NavList
                            direction="column"
                            closeMenu={closeMenu}
                            className="mobile-menu__sub-list"
                            routes={productsLinks}
                        />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default PhoneMenu;
