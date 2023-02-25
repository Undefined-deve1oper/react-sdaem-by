import React, { useCallback } from "react";
import { useStateSelector } from "../../../../store";
import { getCitiesList } from "../../../../store/slices/cities";
import { getTypesList } from "../../../../store/slices/types";
import { SearchEstateFormDataType } from "../../../../types/types";
import { SelectField } from "../../../common/Fields";

type SelectGroupTypes = {
    data: SearchEstateFormDataType;
    onChange: (target: any) => void;
};

const SelectGroup: React.FC<SelectGroupTypes> = ({ data, onChange }) => {
    const cities = useStateSelector(getCitiesList());
    const types = useStateSelector(getTypesList());

    return (
        <>
            <div className="search-panel__item">
                <span>Город</span>
                <SelectField
                    options={cities}
                    onSelectChange={onChange}
                    name="cityId"
                />
            </div>
            <div className="search-panel__item">
                <span>Тип</span>
                <SelectField
                    name="typeId"
                    onSelectChange={onChange}
                    options={types}
                />
            </div>
        </>
    );
};

export default React.memo(SelectGroup);
