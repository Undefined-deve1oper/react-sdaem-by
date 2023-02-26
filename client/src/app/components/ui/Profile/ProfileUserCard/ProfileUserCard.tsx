import React from "react";
import { NavLink } from "react-router-dom";
import {
    getCurrentUserData,
    getUserById,
    useStateSelector
} from "../../../../store";
import { getFormatDate } from "../../../../utils/dateHelpers";
import IconSvg from "../../../common/IconSvg";

const ProfileUserCard = ({ userId }: { userId: string }) => {
    const currentUser = useStateSelector(getUserById(userId));

    if (currentUser) {
        const correctBirthDay = getFormatDate(currentUser.birthYear);
        const existsSince = getFormatDate(currentUser.createdAt);

        return (
            <div className="profile-card">
                <div className="profile-card__body">
                    <div className="profile-card__image">
                        <div className="profile-card__avatar">
                            <img src={currentUser.avatarImage} alt="Avatar" />
                        </div>
                        <NavLink
                            to={`/users/${currentUser._id}/edit`}
                            className="profile-card__icon"
                        >
                            <IconSvg name="photo" />
                        </NavLink>
                    </div>
                    <div className="profile-card__content">
                        <div className="profile-card__info">
                            <h3 className="profile-card__name">
                                {currentUser.name}
                            </h3>
                            <NavLink
                                to={`/users/${currentUser._id}/edit`}
                                className="profile-card__button"
                            >
                                <IconSvg name="edit" />
                                Редактировать профиль
                            </NavLink>
                        </div>
                        <ul className="profile-card__list">
                            <li className="profile-card__item">
                                <IconSvg name="date" />
                                <p>{correctBirthDay}</p>
                            </li>
                            <li className="profile-card__item">
                                <IconSvg name="email" />
                                <p>{currentUser.email}</p>
                            </li>
                            <li className="profile-card__item">
                                <IconSvg name="id" />
                                <p>{currentUser._id}</p>
                            </li>
                        </ul>
                    </div>
                    <div className="profile-card__contact">
                        <p className="profile-card__time">
                            На сайте с {existsSince}
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    return <h1>Loading...</h1>;
};

export default ProfileUserCard;
