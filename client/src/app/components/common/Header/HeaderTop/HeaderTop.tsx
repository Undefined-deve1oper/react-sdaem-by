import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import PhoneMenu from "../../../ui/PhoneMenu";
import Bookmark from "../../Bookmark";
import Burger from "../../Burger";
import NavList from "../../NavList";
import data from "../../../../config/navigation-config.json";

const HeaderTop: React.FC = () => {
    const [isOpen, setOpen] = useState<boolean>(false);

    const handleToggleMenu = () => {
        setOpen((prevState) => !prevState);
    };

    return (
        <>
            <PhoneMenu open={isOpen} data={data} />
            <div className="header__top top-header">
                <div className="top-header__container _container">
                    <Burger open={isOpen} onToggleMenu={handleToggleMenu} />
                    <NavList
                        routes={data}
                        className={"top-header__menu menu"}
                    />
                    <div className="top-header__actions actions-header">
                        <Bookmark label="Закладки" />
                    </div>
                    <div className="header-buttons">
                        <NavLink to="/login" className="header-buttons-button">
                            Вход и регистрация
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderTop;
