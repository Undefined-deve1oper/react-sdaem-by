import React, { useState } from "react";
import { EstateItem } from "../../../../store/slices/estates";
import Button from "../../../common/Button";
import { SelectField } from "../../../common/Fields";
import IconSvg from "../../../common/IconSvg";
import EstateCard from "../EstateCard";

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

    if (estates.length === 0)
        return (
            <p className="main-estates__title">
                К сожелению объявлений не найдено
            </p>
        );

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
                    <EstateCard estate={estate} key={estate._id} />
                ))}
            </div>
        </div>
    );
};

export default EstatesList;
