import { Slider, SliderProps } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { InputField } from "..";
import Loader from "../../Loader";

// const valuetext = (value: number) => {
//     return `${value}₽`;
// };

type onChange = {
    name?: string;
    value: number[];
};

type RangeSliderFieldProps = {
    min: number;
    max: number;
    name: string;
    label: string;
    description?: string;
    value?: number[];
    onChange: (props: onChange) => void;
};

const RangeSliderField: React.FC<RangeSliderFieldProps> = ({
    label,
    name,
    onChange,
    value = [],
    min = 0,
    max = 1000,
    description
}) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.name === "max") {
            onChange({ name, value: [value[0], +event.target.value] });
        }
        if (event.target.name === "min") {
            onChange({ name, value: [+event.target.value, value[1]] });
        }
    };

    console.log(value);

    if (value) {
        return (
            <>
                <h3>{label || "Цена за сутки (RUB)"}</h3>
                <div className="search-panel__range">
                    <InputField
                        inputProps={{ min: min }}
                        label="От"
                        name="min"
                        type="number"
                        value={String(value[0])}
                        onChange={handleInputChange}
                        sx={{ flex: "0 1 50%" }}
                    />
                    <InputField
                        inputProps={{ max: max }}
                        label="До"
                        name="max"
                        type="number"
                        value={String(value[1])}
                        onChange={handleInputChange}
                        sx={{ flex: "0 1 50%" }}
                    />
                </div>

                {description && (
                    <p className="search-panel__description">{description}</p>
                )}
            </>
        );
    }

    return <Loader />;
};

export default React.memo(RangeSliderField);
