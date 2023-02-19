import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import PhoneMenu from "../../../ui/PhoneMenu";
import Bookmark from "../../Bookmark";
import Burger from "../../Burger";
import NavList from "../../NavList";
import data from "../../../../config/navigation-config.json";
import { getAuthErrors, getIsLoggedIn } from "../../../../store";
import { useSelector } from "react-redux";

const HeaderTop: React.FC = () => {
    const [isOpen, setOpen] = useState<boolean>(false);
    const isLoggedIn = useSelector(getIsLoggedIn());
    const authErrors = useSelector(getAuthErrors());

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
                    {isLoggedIn && !authErrors ? (
                        <h1>Добро пожаловать</h1>
                    ) : (
                        <div className="header-buttons">
                            <NavLink
                                to="/login"
                                className="header-buttons-button"
                            >
                                Вход и регистрация
                            </NavLink>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default HeaderTop;
