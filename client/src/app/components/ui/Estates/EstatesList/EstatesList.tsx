import React, { useState } from "react";
import { EstateItem } from "../../../../store/slices/estates";
import Button from "../../../common/Button";
import ButtonFavorite from "../../../common/ButtonFavorite";
import { SelectField } from "../../../common/Fields";
import IconSvg from "../../../common/IconSvg";
import ImageSlider from "../../../common/SliderImages/SliderImages";
import Owner from "../../Owner";

const selectItems = [
    { value: "0", label: "По возрастанию" },
    { value: "1", label: "По убыванию" }
];

type EstatesListProps = {
    estates: EstateItem[];
};

const EstatesList: React.FC<EstatesListProps> = ({ estates }) => {
    const [direction, setDirection] = useState("tiles");

    const setDirectionList = () => {
        setDirection("list");
    };
    const setDirectionTiels = () => {
        setDirection("tiles");
    };

    return (
        <div className="estates-products">
            <div className="estates-products__header">
                <div className={"estates-products__select"}>
                    <IconSvg name="down-sort" />
                    <SelectField
                        name={"sort"}
                        options={selectItems}
                        error={""}
                        placeholder={"По умолчанию"}
                    />
                </div>
                <div className="estates-products__view estates-view">
                    <Button
                        onClick={setDirectionList}
                        className={"estates-view__item"}
                    >
                        <IconSvg name="tile" />
                        Список
                    </Button>
                    <Button
                        onClick={setDirectionTiels}
                        className="estates-view__item"
                    >
                        <IconSvg name="grid" />
                        Плитки
                    </Button>
                </div>
            </div>
            <div className={"estates-products__row " + direction}>
                {estates.map((estate) => (
                    <div
                        key={estate._id}
                        className="estates-products__card estate-card"
                    >
                        <div className="estate-card__labels"></div>
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
                            <div className="estate-card__title">
                                {estate.title}
                            </div>
                            <div className="estate-card__location">
                                <IconSvg name="mark" />
                                {estate.city}
                            </div>
                            <div className="estate-card__description">
                                {estate.info.description}
                            </div>
                            <div className="estate-card__contacts">
                                <ButtonFavorite
                                    status={true}
                                    onToggle={console.log}
                                />
                                <Owner ownerId={estate.info.ownerId} />
                                <Button className="estate-card__more">
                                    Подробнее
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EstatesList;
