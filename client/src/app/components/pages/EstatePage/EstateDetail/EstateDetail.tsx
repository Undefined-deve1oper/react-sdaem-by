import React, { useEffect } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { useFavourite } from "../../../../hooks";
import { getCurrentUserId, useStateSelector } from "../../../../store";
import {
    getEstateById,
    getEstateRating
} from "../../../../store/slices/estates";
import { getFormatDate } from "../../../../utils/dateHelpers";
import { getAverageEstateRate } from "../../../../utils/getAverageEstateRate";
import ButtonFavorite from "../../../common/ButtonFavorite";
import IconSvg from "../../../common/IconSvg";
import Rating from "../../../common/Rating";
import ImageSlider from "../../../common/SliderImages/SliderImages";
import OwnerCard from "../../../ui/OwnerCard";
import ShareButtons from "../../../ui/ShareButtons";

const EstateDetail: React.FC = () => {
    const { pathname } = useLocation();
    const { estateId } = useParams<{ estateId: string }>();
    const estate = useStateSelector(getEstateById(estateId));
    const rating = useStateSelector(getEstateRating(estateId || ""));
    const { isFavourite, handleSelectFavorite } = useFavourite(estateId || "");
    const currentUserId = useStateSelector(getCurrentUserId());

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    if (estate && rating) {
        const correctCreateDate = getFormatDate(estate.createdAt);
        const correctUpdatedDate = getFormatDate(estate.updatedAt);

        return (
            <div className="estate-detail">
                <div className="estate-detail__welcome">
                    <div className="estate-detail__row">
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
                        <div className="estate-detail__slider">
                            <ImageSlider
                                items={estate.images}
                                pagination={{ clickable: true }}
                                grabCursor={true}
                                className={"estate-detail__slide"}
                            />
                        </div>
                        <div className="estate-detail__info">
                            <div className="estate-detail__header">
                                <h1 className="estate-detail__title">
                                    {estate.title}
                                </h1>
                                <div className="estate-card__price">
                                    <span>{estate.price} RUB</span>
                                    за сутки
                                </div>
                            </div>
                            <div className="estate-detail__main">
                                <div className="estate-detail__location">
                                    <IconSvg name="mark" />
                                    {estate.location}
                                </div>
                                <div className="estate-detail__rating">
                                    <Rating
                                        name="rating"
                                        readOnly
                                        defaultState={getAverageEstateRate(
                                            rating
                                        )}
                                    />
                                </div>
                            </div>
                            <div className="estate-detail__footer">
                                <ButtonFavorite
                                    label="В закладки"
                                    status={isFavourite || false}
                                    onToggle={handleSelectFavorite}
                                />
                                <ShareButtons
                                    estatesPage
                                    url="https://github.com/Undefined-deve1oper/react-sdaem-by"
                                />
                            </div>
                        </div>
                        <div className="estate-detail__dates">
                            <p className="estate-detail__text">
                                Дата подачи: {correctCreateDate}
                            </p>
                            <p className="estate-detail__text">
                                Дата обновления: {correctUpdatedDate}
                            </p>
                        </div>
                        <div className="estate-detail__description">
                            <div className="estate-detail__subtitle">
                                О Товаре
                            </div>
                            <p>{estate.info.description}</p>
                        </div>
                        <div className="estate-detail__comfort">
                            <div className="estate-detail__subtitle">
                                Комфорт
                            </div>
                            <ul className="comfort-list">
                                <li className="comfort-list__item">
                                    Подогрев сидений
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="estate-detail__owner">
                        <OwnerCard ownerId={estate.info.ownerId} />
                    </div>
                </div>
            </div>
        );
    }
    return <h1>Loading...</h1>;
};

export default EstateDetail;
