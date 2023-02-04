import React from "react";
import { SearchEstateFormDataType } from "../../../../types/types";
import { TextField } from "../../../common/Fields";

type ProceRangeGroupType = {
    data: SearchEstateFormDataType;
    onChange: (target: any) => void;
};

const PriceRangeGroup: React.FC<ProceRangeGroupType> = ({ data, onChange }) => {
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
                />
                <TextField
                    name="priceMax"
                    label="До"
                    type="number"
                    onChange={onChange}
                    value={data.priceMax}
                />
            </div>
        </div>
    );
};

export default PriceRangeGroup;
