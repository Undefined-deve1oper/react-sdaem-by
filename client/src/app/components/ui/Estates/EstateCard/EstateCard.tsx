import React from "react";
import { NavLink } from "react-router-dom";
import { useFavourite } from "../../../../hooks";
import { getCurrentUserId, useStateSelector } from "../../../../store";
import { EstateItem } from "../../../../store/slices/estates";
import { textCropper } from "../../../../utils/helpers";
import Button from "../../../common/Button";
import ButtonFavorite from "../../../common/ButtonFavorite";
import IconSvg from "../../../common/IconSvg";
import ImageSlider from "../../../common/SliderImages/SliderImages";
import Owner from "../../Owner";

type Props = {
    estate: EstateItem;
};

const EstateCard: React.FC<Props> = ({ estate }) => {
    const { isFavourite, handleSelectFavorite } = useFavourite(estate._id!);
    const currentUserId = useStateSelector(getCurrentUserId());
    const slicedText = textCropper(estate.description || "", 219);

    return (
        <div className="estates-products__card estate-card">
            <div className="estate-card__functions">
                {currentUserId === estate.info.ownerId && (
                    <NavLink
                        to={`/estates/${estate._id}/edit`}
                        className="estate-card__edit"
                    >
                        <IconSvg name="edit" />
                    </NavLink>
                )}
            </div>
            <div className="estate-card__images">
                <ImageSlider
                    items={estate.images}
                    pagination={{ clickable: true }}
                    grabCursor={true}
                    className={"estate-card__img"}
                />
            </div>
            <div className="estate-card__content">
                <div className="estate-card__price">
                    <span>{estate.price} RUB</span>
                    за сутки
                </div>
                <div className="estate-card__title">{estate.title}</div>
                <div className="estate-card__location">
                    <IconSvg name="mark" />
                    {estate.city}
                </div>
                <div className="estate-card__description">{slicedText}</div>
                <div className="estate-card__contacts">
                    <ButtonFavorite
                        status={isFavourite || false}
                        onToggle={handleSelectFavorite}
                    />
                    <Owner ownerId={estate.info.ownerId} />
                    <NavLink
                        to={`/estates/${estate._id}`}
                        className="estate-card__more"
                    >
                        Подробнее
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default EstateCard;
