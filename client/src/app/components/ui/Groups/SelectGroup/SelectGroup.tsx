import React, { useCallback, useState } from "react";
import { useLocation } from "react-router-dom";
import { citiesOptions, roomsOptions } from "../../../../constants/options";
import { path } from "../../../../types/enums";
import { SearchEstateFormDataType } from "../../../../types/types";
import { SelectField } from "../../../common/Fields";

type SelectGroupTypes = {
    data: SearchEstateFormDataType;
    onChange: (target: any) => void;
};

const SelectGroup: React.FC<SelectGroupTypes> = ({ data, onChange }) => {
    const location = useLocation();
    const isHome = location.pathname === path.home;

    const handleChange = useCallback((data: any) => {
        onChange({ target: { name: data.name, value: data.value } });
    }, []);

    return (
        <>
            {isHome && (
                <div className="search-panel__item">
                    <span>Город</span>
                    <SelectField
                        options={citiesOptions}
                        value={data.city}
                        onSelectChange={handleChange}
                        name="city"
                    />
                </div>
            )}
            <div className="search-panel__item">
                <span>Комнаты</span>
                <SelectField
                    name="rooms"
                    value={data.rooms}
                    onSelectChange={handleChange}
                    options={roomsOptions}
                />
            </div>
        </>
    );
};

export default React.memo(SelectGroup);
