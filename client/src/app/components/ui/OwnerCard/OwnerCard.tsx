import React from "react";
import { NavLink } from "react-router-dom";
import { getUserById, useStateSelector } from "../../../store";
import { getFormatDate } from "../../../utils/dateHelpers";
import IconSvg from "../../common/IconSvg";
import { IOwner } from "../Owner/Owner";

const OwnerCard: React.FC<IOwner> = ({ ownerId }) => {
    const owner = useStateSelector(getUserById(ownerId));

    if (owner) {
        const correctBirthDate = getFormatDate(owner.birthYear);
        const existsSince = getFormatDate(owner.createdAt);

        return (
            <div className="owner__body">
                <div className="owner__image">
                    <img src={owner.avatarImage} alt="Avatat" />
                </div>
                <div className="owner__content">
                    <p className="owner__title">Владелец</p>
                    <h3 className="owner__name">{owner.name}</h3>
                    <ul className="owner__list">
                        <li className="owner__item">
                            Дата рождения: <span>{correctBirthDate}</span>
                        </li>
                        <li className="owner__item">
                            На сайте с - <span>{existsSince}</span>
                        </li>
                    </ul>
                    <div className="owner-contacts">
                        <NavLink
                            className="owner-contacts__item"
                            target="_blank"
                            to={"https://" + owner.email}
                        >
                            <div className="owner-contacts__icon">
                                <IconSvg name="email" />
                            </div>
                            <p>{owner.email}</p>
                        </NavLink>
                    </div>
                </div>
            </div>
        );
    }
    return <h1>Произошла ошибка. Попробуйте позже</h1>;
};

export default OwnerCard;
