import React, { ChangeEvent, useCallback } from "react";
import { FilterData } from "../../../../hooks/useFilters";
import { useStateSelector } from "../../../../store";
import { getCitiesList, getCityById } from "../../../../store/slices/cities";
import { getTypeById, getTypesList } from "../../../../store/slices/types";
import { SelectField } from "../../../common/Fields";

type SelectGroupTypes = {
    data: FilterData;
    onChange: (target: any) => void;
};

const SelectGroup: React.FC<SelectGroupTypes> = ({ data, onChange }) => {
    const cities = useStateSelector(getCitiesList());
    const types = useStateSelector(getTypesList());

    const handleChange = (event: { name: string; value: string }) => {
        onChange({ target: { name: event.name, value: event.value } });
    };

    return (
        <>
            <div className="search-panel__item">
                <span>Город</span>
                <SelectField
                    options={cities}
                    onSelectChange={handleChange}
                    value={data.city}
                    name="city"
                />
            </div>
            <div className="search-panel__item">
                <span>Тип</span>
                <SelectField
                    name="type"
                    value={data.type}
                    onSelectChange={handleChange}
                    options={types}
                />
            </div>
        </>
    );
};

export default React.memo(SelectGroup);
