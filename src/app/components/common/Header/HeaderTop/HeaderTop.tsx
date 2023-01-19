import React from "react";
import { NavLink } from "react-router-dom";
import { RoutesLinksType } from "../../../../router/mainRoutes";
import NavList from "../../NavList";
import Bookmark from "../../Bookmark";
import Burger from "../../Burger";
import { useRequest } from "../../../../hooks/useRequest";
import Loader from "../../Loader";

// type HeaderTopProps = {
//     open?: boolean;
//     handleToggleMenu?: () => void;
//     links?: RoutesLinksType[];
// };

const HeaderTop: React.FC = () => {
    const { data, loading, error } = useRequest("navigation/");

    return (
        <div className="header__top top-header">
            <div className="top-header__container _container">
                {/* <Burger open={open} onToggleMenu={handleToggleMenu} /> */}
                {loading && <Loader height={39.4} />}
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
    );
};

export default HeaderTop;
