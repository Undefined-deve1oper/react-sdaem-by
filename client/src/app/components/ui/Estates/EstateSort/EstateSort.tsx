import React from "react";
import { pageSizesList } from "../../../../constants/appFilter";
import { CustomSelectField } from "../../../common/Fields";
import IconSvg from "../../../common/IconSvg";

const estatesSortArray = [
    { name: "По убыванию", value: { path: "title", order: "desc" } },
    { name: "По возрастанию", value: { path: "title", order: "asc" } },
    { name: "Сначала дешёвые", value: { path: "price", order: "asc" } },
    { name: "Сначала дорогие", value: { path: "price", order: "desc" } }
];

type EstatesSortProps = {
    sortBy: { path: string; order: "asc" | "desc" };
    onSort: (event: any) => void;
    handleLimitChange: (event: any) => void;
    limit: number;
};

const EstateSort: React.FC<EstatesSortProps> = ({
    sortBy,
    onSort,
    limit,
    handleLimitChange
}) => {
    return (
        <div className="estate-sort">
            <CustomSelectField
                icon="down-sort"
                name="estateSort"
                label="Сортировать по:"
                defaultValue="Выберите..."
                onChange={onSort}
                value={JSON.stringify(sortBy)}
                options={estatesSortArray}
            />
            <CustomSelectField
                icon="options"
                name="limit"
                defaultValue="Выберите..."
                label="Отображать по"
                onChange={handleLimitChange}
                value={limit}
                options={pageSizesList}
            />
        </div>
    );
};

export default EstateSort;
