import React from "react";
import { SearchEstateFormDataType } from "../../../../types/types";
import { TextField } from "../../../common/Fields";

type ProceRangeGroupType = {
    data: SearchEstateFormDataType;
    onChange: (target: any) => void;
    errors?: {
        [key: string]: any;
    };
};

const PriceRangeGroup: React.FC<ProceRangeGroupType> = ({
    data,
    onChange,
    errors
}) => {
    return (
        <div className="search-panel__item">
            <span>Цена за сутки (RUB)</span>
            <div className="search-panel__range">
                <TextField
                    name="priceMin"
                    label="От"
                    type="number"
                    onChange={onChange}
                    value={data.priceMin}
                    error={errors?.priceMin}
                />
                <TextField
                    name="priceMax"
                    label="До"
                    type="number"
                    onChange={onChange}
                    value={data.priceMax}
                    error={errors?.priceMax}
                />
            </div>
        </div>
    );
};

export default PriceRangeGroup;
