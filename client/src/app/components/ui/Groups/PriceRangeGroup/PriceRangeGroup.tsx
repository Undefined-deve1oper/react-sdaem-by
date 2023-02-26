import React from "react";
import { TextField } from "../../../common/Fields";
import { initialFilterState } from "../../Forms/SearchEstateForm/SearchEstateForm";

type ProceRangeGroupType = {
    data: initialFilterState;
    onChange: (target: any) => void;
    errors?: {
        [key: string]: any;
    };
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
                    // value={data.priceMin}
                />
                <TextField
                    name="priceMax"
                    label="До"
                    type="number"
                    onChange={onChange}
                    // value={data.priceMax}
                />
            </div>
        </div>
    );
};

export default PriceRangeGroup;
