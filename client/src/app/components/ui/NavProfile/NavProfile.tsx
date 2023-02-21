import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { getCurrentUserData, logOut, useAppDispatch } from "../../../store";
import Button from "../../common/Button";
import IconSvg from "../../common/IconSvg";

const NavProfile = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const currentUser = useSelector(getCurrentUserData());
    const [isOpen, setOpen] = useState(false);

    const closeMenu = () => {
        setOpen(false);
    };
    const toggleOpenMenu = () => {
        setOpen((prevState) => !prevState);
    };
    const handleClickSettingsMenu = (path: string, replace?: boolean) => {
        navigate(path, { replace: replace || false });
        closeMenu();
    };
    const handleLogOut = () => {
        dispatch(logOut());
    };

    if (currentUser) {
        const { avatarImage, name } = currentUser;

        return (
            <div className="nav-profile">
                <div className="nav-profile__body" onClick={toggleOpenMenu}>
                    <div className="nav-profile__avatar">
                        <img src={avatarImage} alt="Avatar" />
                    </div>
                    <h3 className="nav-profile__name">{name}</h3>
                    <Button className="nav-profile__more">
                        <IconSvg name="arrow" />
                    </Button>
                </div>
                <ul
                    className={
                        "nav-profile__list list-profile" +
                        (isOpen ? " _active" : "")
                    }
                >
                    <li
                        className="list-profile__item"
                        onClick={() =>
                            handleClickSettingsMenu(`/users/${currentUser._id}`)
                        }
                    >
                        <Button className="list-profile__link">
                            <IconSvg name="user" />
                            Профиль
                        </Button>
                    </li>
                    {currentUser.role === "ADMIN" && (
                        <li
                            className="list-profile__item"
                            onClick={() =>
                                handleClickSettingsMenu(
                                    `/users/${currentUser._id}/dashboard`
                                )
                            }
                        >
                            <Button className="list-profile__link">
                                <IconSvg name="admin" />
                                Панель администратора
                            </Button>
                        </li>
                    )}
                    <li
                        className="list-profile__item"
                        onClick={() =>
                            handleClickSettingsMenu(
                                `/users/${currentUser._id}/booking`
                            )
                        }
                    >
                        <Button className="list-profile__link">
                            <IconSvg name="booking" />
                            Мои Бронирования
                        </Button>
                    </li>
                    <li className="list-profile__item" onClick={handleLogOut}>
                        <Button className="list-profile__link">
                            <IconSvg name="logout" />
                            Выйти
                        </Button>
                    </li>
                </ul>
            </div>
        );
    }
    return <>Loading...</>;
};

export default NavProfile;
