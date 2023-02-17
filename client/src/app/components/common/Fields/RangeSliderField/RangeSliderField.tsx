import React from "react";
import Loader from "../../Loader";

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

    if (!value) {
        return <Loader />;
    }

    return (
        <div className="search-panel__item">
            <h3>{label || "Цена за сутки (RUB)"}</h3>
            <div className="search-panel__range">
                {/* <InputField
                    inputProps={{ min: min }}
                    label="От"
                    name="min"
                    type="number"
                    value={String(value[0])}
                    onChange={handleInputChange}
                    sx={{ flex: "1 1 50%" }}
                />
                <InputField
                    inputProps={{ max: max }}
                    label="До"
                    name="max"
                    type="number"
                    value={String(value[1])}
                    onChange={handleInputChange}
                    sx={{ flex: "1 1 50%" }}
                /> */}
            </div>

            {description && (
                <p className="search-panel__description">{description}</p>
            )}
        </div>
    );
};

export default React.memo(RangeSliderField);
