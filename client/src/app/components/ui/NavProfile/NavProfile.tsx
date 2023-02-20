import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getCurrentUserData, logOut, useAppDispatch } from "../../../store";

const NavProfile = () => {
    const dispatch = useAppDispatch();
    const currentUser = useSelector(getCurrentUserData());

    const handleLogOut = () => {
        dispatch(logOut());
    };

    if (currentUser) {
        const { avatarImage, name } = currentUser;

        return (
            <div className="nav-profile">
                <div className="nav-profile__avatar">
                    <img src={avatarImage} alt="Avatar" />
                </div>
            </div>
        );
    }
    return <>Loading...</>;
};

export default NavProfile;
