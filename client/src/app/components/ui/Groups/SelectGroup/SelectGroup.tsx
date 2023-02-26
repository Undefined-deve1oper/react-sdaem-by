import React, { ChangeEvent, useCallback } from "react";
import { useStateSelector } from "../../../../store";
import { getCitiesList, getCityById } from "../../../../store/slices/cities";
import { getTypeById, getTypesList } from "../../../../store/slices/types";
import { SelectField } from "../../../common/Fields";
import { initialFilterState } from "../../Forms/SearchEstateForm/SearchEstateForm";

type SelectGroupTypes = {
    data: initialFilterState;
    onChange: (target: any) => void;
};

const SelectGroup: React.FC<SelectGroupTypes> = ({ data, onChange }) => {
    const cities = useStateSelector(getCitiesList());
    const types = useStateSelector(getTypesList());
    const cityValue = useStateSelector(getCityById(data.cityId));
    const typeValue = useStateSelector(getTypeById(data.typeId));

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
                    value={cityValue?.name}
                    name="cityId"
                />
            </div>
            <div className="search-panel__item">
                <span>Тип</span>
                <SelectField
                    name="typeId"
                    value={typeValue?.name}
                    onSelectChange={handleChange}
                    options={types}
                />
            </div>
        </>
    );
};

export default React.memo(SelectGroup);
