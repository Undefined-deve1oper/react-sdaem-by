import React, { useState } from "react";
import { useForm } from "../../../../hooks";
import { ButtonGroup, PriceRangeGroup, SelectGroup } from "../../Groups";
import OpenForm from "../../OpenForm";
import { validatorConfig } from "./validatorConfig";

type EstateFormTypes = {
    onSubmit: () => void;
};

const initialState = {
    city: "",
    room: "",
    area: "",
    metro: "",
    type: "",
    priceMin: "",
    priceMax: "",
    capacity: ""
};

const EstateForm: React.FC<EstateFormTypes> = ({ onSubmit }) => {
    const { data, errors, handleChange } = useForm(
        initialState,
        false,
        validatorConfig
    );
    const [openOptions, setOptions] = useState(false);

    const handleToggleOptions = () => {
        setOptions((prevState) => !prevState);
    };

    return (
        <div className="search-estate">
            <div className="search-estate__body">
                <form
                    className={
                        "search-estate__search search-panel " +
                        (openOptions ? "_open" : "")
                    }
                    onSubmit={onSubmit}
                >
                    <SelectGroup data={data} onChange={handleChange} />
                    <PriceRangeGroup
                        data={data}
                        onChange={handleChange}
                        errors={errors}
                    />
                    <ButtonGroup onToggleOptions={handleToggleOptions} />
                    {openOptions && (
                        <OpenForm data={data} onChange={handleChange} />
                    )}
                </form>
            </div>
        </div>
    );
};

export default EstateForm;
