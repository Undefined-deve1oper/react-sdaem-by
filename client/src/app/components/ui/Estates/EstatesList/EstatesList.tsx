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
    if (estates.length === 0)
        return (
            <p className="main-estates__title">
                К сожелению объявлений не найдено
            </p>
        );

    return (
        <>
            {estates.map((estate) => (
                <EstateCard estate={estate} key={estate._id} />
            ))}
        </>
    );
};

export default EstatesList;
