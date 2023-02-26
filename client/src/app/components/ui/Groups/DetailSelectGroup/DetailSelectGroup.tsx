import React, { useCallback } from "react";
import {
    areaOptions,
    metroOptions,
    roomsOptions
} from "../../../../constants/options";
import { FilterData } from "../../../../hooks/useFilters";
import { useStateSelector } from "../../../../store";
import { getBrandsList } from "../../../../store/slices/brands";
import { getCitiesList } from "../../../../store/slices/cities";
import { getTypesList } from "../../../../store/slices/types";
import { SearchEstateFormDataType } from "../../../../types/types";
import { DatePickerField, SelectField } from "../../../common/Fields";

type DetailSelectGroupTypes = {
    data: FilterData;
    onChange: (target: any) => void;
};

const DetailSelectGroup: React.FC<DetailSelectGroupTypes> = ({
    data,
    onChange
}) => {
    const brands = useStateSelector(getBrandsList());
    const cities = useStateSelector(getCitiesList());
    const types = useStateSelector(getTypesList());

    const handleChange = useCallback(
        (data: { name: string; value: string }) => {
            onChange({ target: { name: data.name, value: data.value } });
        },
        []
    );

    return (
        <>
            <div className="modal-options__item">
                <span>Город</span>
                <SelectField
                    options={cities}
                    onSelectChange={handleChange}
                    value={data.city}
                    name="city"
                />
            </div>
            <div className="modal-options__item">
                <span>Тип</span>
                <SelectField
                    name="type"
                    value={data.type}
                    onSelectChange={handleChange}
                    options={types}
                />
            </div>
            <div className="modal-options__item">
                <span>Бренд</span>
                <SelectField
                    name="brand"
                    value={data.brand}
                    onSelectChange={handleChange}
                    options={brands}
                />
            </div>
        </>
    );
};

export default React.memo(DetailSelectGroup);
