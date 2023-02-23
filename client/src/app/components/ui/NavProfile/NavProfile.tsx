import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { useOutside } from "../../../hooks";
import { getCurrentUserData, logOut, useAppDispatch } from "../../../store";
import Button from "../../common/Button";
import IconSvg from "../../common/IconSvg";

const NavProfile = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const currentUser = useSelector(getCurrentUserData());
    const ref = useRef(null);
    const { isOpen, handleOpen, closeOpen } = useOutside(ref);

    const handleClickSettingsMenu = (path: string, replace?: boolean) => {
        navigate(path, { replace: replace || false });
        closeOpen();
    };
    const handleLogOut = () => {
        dispatch(logOut());
    };

    if (currentUser) {
        const { avatarImage, name } = currentUser;

        return (
            <div className="nav-profile">
                <div
                    className="nav-profile__body"
                    ref={ref}
                    onClick={handleOpen}
                >
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
                            onClick={() => handleClickSettingsMenu(`/admin`)}
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
