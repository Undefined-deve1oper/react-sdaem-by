import React, { useCallback } from "react";
import {
    areaOptions,
    metroOptions,
    roomsOptions
} from "../../../../constants/options";
import { FilterData } from "../../../../hooks/useFilters";
import { SearchEstateFormDataType } from "../../../../types/types";
import { SelectField } from "../../../common/Fields";

type DetailSelectGroupTypes = {
    data: FilterData;
    onChange: (target: any) => void;
};

const DetailSelectGroup: React.FC<DetailSelectGroupTypes> = ({
    data,
    onChange
}) => {
    const handleChange = useCallback((data: any) => {
        onChange({ target: { name: data.name, value: data.value } });
    }, []);

    return (
        <>
            gfd
            {/* <div className="modal-options__item">
                <span>Спальные места</span>
                <SelectField
                    name="rooms"
                    value={data.rooms}
                    onSelectChange={handleChange}
                    options={roomsOptions}
                />
            </div>
            <div className="modal-options__item">
                <span>Район</span>
                <SelectField
                    name="rooms"
                    value={data.area}
                    onSelectChange={handleChange}
                    options={areaOptions}
                />
            </div>
            <div className="modal-options__item">
                <span>Метро</span>
                <SelectField
                    name="rooms"
                    value={data.metro}
                    onSelectChange={handleChange}
                    options={metroOptions}
                />
            </div> */}
        </>
    );
};

export default React.memo(DetailSelectGroup);
