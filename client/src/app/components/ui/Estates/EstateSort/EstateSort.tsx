import React from "react";
import { SelectField } from "../../../common/Fields";

const estatesSortArray = [
    { label: "По убыванию", value: { path: "title", order: "desc" } },
    { label: "По возрастанию", value: { path: "title", order: "asc" } },
    { label: "Сначала дешёвые", value: { path: "price", order: "asc" } },
    { label: "Сначала дорогие", value: { path: "price", order: "desc" } }
];

type EstatesSortProps = {
    onSort: (event: any) => void;
};

const EstateSort: React.FC<EstatesSortProps> = ({ onSort }) => {
    return (
        <SelectField
            name="estateSort"
            placeholder="Сортировать"
            onSelectChange={onSort}
            options={estatesSortArray}
        />
    );
};

export default EstateSort;
