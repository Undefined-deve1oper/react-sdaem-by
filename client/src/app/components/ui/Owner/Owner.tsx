import React from "react";
import { getUserById, useStateSelector } from "../../../store";
import { getFormatDate } from "../../../utils/dateHelpers";
import Button from "../../common/Button";
import IconSvg from "../../common/IconSvg";

interface IOwner {
    ownerId: string;
}

const Owner: React.FC<IOwner> = ({ ownerId }) => {
    const owner = useStateSelector(getUserById(ownerId));

    if (owner) {
        const correctBirthDate = getFormatDate(owner.createdAt);
        const existsSince = getFormatDate(owner.createdAt);

        return (
            <div className="owner-wrapper">
                <Button className="show-owner">
                    <IconSvg name="phone" />
                    Контакты
                </Button>
                <div className="owner">
                    <div className="owner__body">
                        <div className="owner__image">
                            <img src={owner.avatarImage} alt="Avatat" />
                        </div>
                        <div className="owner__content">
                            <span className="owner__title">Владелец</span>
                            <h3 className="owner__name">{owner.name}</h3>
                            <ul className="owner__list">
                                <li className="owner__item">
                                    Пол: {owner.gender}
                                </li>
                                <li className="owner__item">
                                    Пол: {correctBirthDate}
                                </li>
                                <li className="owner__item">
                                    На сайте с: {existsSince}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return <h1>Произошла ошибка. Попробуйте позже</h1>;
};

export default React.memo(Owner);
