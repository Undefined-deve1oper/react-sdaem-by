import React from "react";
import { CustomSelectField } from "../../../common/Fields";

const estatesSortArray = [
    { name: "По убыванию", value: { path: "title", order: "desc" } },
    { name: "По возрастанию", value: { path: "title", order: "asc" } },
    { name: "Сначала дешёвые", value: { path: "price", order: "asc" } },
    { name: "Сначала дорогие", value: { path: "price", order: "desc" } }
];

type EstatesSortProps = {
    sortBy: { path: string; order: "asc" | "desc" };
    onSort: (event: any) => void;
};

const EstateSort: React.FC<EstatesSortProps> = ({ sortBy, onSort }) => {
    return (
        <CustomSelectField
            name="estateSort"
            onChange={onSort}
            value={JSON.stringify(sortBy)}
            options={estatesSortArray}
        />
    );
};

export default EstateSort;
