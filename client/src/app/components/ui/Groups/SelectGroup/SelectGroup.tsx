import React, { ChangeEvent, useCallback } from "react";
import { FilterData } from "../../../../hooks/useFilters";
import { useStateSelector } from "../../../../store";
import { getCitiesList, getCityById } from "../../../../store/slices/cities";
import { getTypeById, getTypesList } from "../../../../store/slices/types";
import { DatePickerField, SelectField } from "../../../common/Fields";

type SelectGroupTypes = {
    data: FilterData;
    onChange: (target: any) => void;
};

const SelectGroup: React.FC<SelectGroupTypes> = ({ data, onChange }) => {
    return (
        <>
            <div className="search-panel__item">
                <DatePickerField
                    name="entry"
                    title="Владение с"
                    value={data?.entry}
                    onChange={onChange}
                    minDate={new Date("1955-01-01")}
                />
            </div>
            <div className="search-panel__item">
                <DatePickerField
                    name="departure"
                    title="Владение до"
                    value={data?.departure}
                    onChange={onChange}
                    minDate={new Date("1955-01-01")}
                />
            </div>
        </>
    );
};

export default React.memo(SelectGroup);
