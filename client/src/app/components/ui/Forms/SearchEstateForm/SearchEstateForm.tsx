import React, { useState } from "react";
import { useForm } from "../../../../hooks";
import { EstateItem } from "../../../../store/slices/estates";
import { BookingDateType } from "../../../../types/types";
import { ButtonGroup, PriceRangeGroup, SelectGroup } from "../../Groups";
import OpenForm from "../../OpenForm";
import { validatorConfig } from "./validatorConfig";

interface initialState {
    price?: number[];
    brand: string;
    priceMin?: string;
    priceMax?: string;
    cityId?: string;
    typeId?: string;
}

type EstateFormTypes = {
    data: initialState;
    onChange: (e: any) => void;
    handleReset: (e: any) => void;
};

const EstateForm: React.FC<EstateFormTypes> = ({
    data,
    onChange,
    handleReset
}) => {
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
                >
                    <SelectGroup data={data} onChange={onChange} />
                    <PriceRangeGroup data={data} onChange={onChange} />
                    <ButtonGroup
                        handleReset={handleReset}
                        onToggleOptions={handleToggleOptions}
                    />
                    {openOptions && (
                        <OpenForm data={data} onChange={onChange} />
                    )}
                </form>
            </div>
        </div>
    );
};

export default EstateForm;
