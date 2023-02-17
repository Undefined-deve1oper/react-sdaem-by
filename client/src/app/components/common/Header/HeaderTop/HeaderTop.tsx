import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import NavList from "../../NavList";
import Bookmark from "../../Bookmark";
import Burger from "../../Burger";
import { useRequest } from "../../../../hooks/useRequest";
import Loader from "../../Loader";
import { api } from "../../../../types/enums";
import PhoneMenu from "../../../ui/PhoneMenu";

const HeaderTop: React.FC = () => {
    const [isOpen, setOpen] = useState<boolean>(false);
    const { data, loading, error } = useRequest(api.navigation);

    const handleToggleMenu = () => {
        setOpen((prevState) => !prevState);
    };

    return (
        <>
            {data && <PhoneMenu open={isOpen} data={data} />}
            <div className="header__top top-header">
                <div className="top-header__container _container">
                    <Burger open={isOpen} onToggleMenu={handleToggleMenu} />
                    <div className="loader">
                        {loading && <Loader height={39.4} />}
                    </div>
                    {error ? (
                        <span className="error">
                            Ошибка сервера, попробуйте обновить страницу
                        </span>
                    ) : (
                        <NavList
                            routes={data}
                            className={"top-header__menu menu"}
                        />
                    )}
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
