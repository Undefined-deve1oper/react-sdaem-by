import React from "react";
import {navigationRoutes, productsNavigationRoutes} from "../../../router/routes";
import NavList from "../../common/NavList";
import Accordion from "../../common/Accordion";

interface PhoneMenuProps {
    open: boolean;
    closeMenu?: () => void;
}

const PhoneMenu: React.FC<PhoneMenuProps> = ({open, closeMenu}) => {
    return (
        <div className={"header__menu mobile-menu" + (open ? " _active" : "")}>
            <ul className="mobile-menu__list">
                <li className="mobile-menu__item">
                    <Accordion
                        label="Навигация по сайту"
                    >
                        <NavList
                            className="mobile-menu__sub-list"
                            direction="column"
                            routes={navigationRoutes}
                            closeMenu={closeMenu}
                        />
                    </Accordion>
                </li>
                <li className="mobile-menu__item">
                    <Accordion
                        label="Наше предложение"
                    >
                        <NavList
                            className="mobile-menu__sub-list"
                            direction="column"
                            routes={productsNavigationRoutes}
                            closeMenu={closeMenu}
                        />
                    </Accordion>
                </li>
            </ul>
        </div>
    );
};

export default PhoneMenu;
