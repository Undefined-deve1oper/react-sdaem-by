import React from "react";
import { headerLinks } from "../../../router/index";
import NavList from "../../common/NavList";
import Accordion from "../../common/Accordion";

interface PhoneMenuProps {
    open: boolean;
    closeMenu?: () => void;
}

const PhoneMenu: React.FC<PhoneMenuProps> = ({ open, closeMenu }) => {
    const { navigationLinks, productsLinks } = headerLinks;

    return (
        <div className={"header__menu mobile-menu" + (open ? " _active" : "")}>
            <div className="mobile-menu__wrapper">
                <ul className="mobile-menu__list">
                    <li className="mobile-menu__item">
                        <Accordion label="Навигация по сайту">
                            <NavList
                                className="mobile-menu__sub-list"
                                direction="column"
                                routes={navigationLinks}
                                closeMenu={closeMenu}
                            />
                        </Accordion>
                    </li>
                    <li className="mobile-menu__item">
                        <Accordion label="Наше предложение">
                            <NavList
                                direction="column"
                                closeMenu={closeMenu}
                                className="mobile-menu__sub-list"
                                routes={productsLinks}
                            />
                        </Accordion>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default PhoneMenu;
