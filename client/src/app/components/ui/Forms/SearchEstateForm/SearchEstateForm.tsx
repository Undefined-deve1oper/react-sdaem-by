import React, { useState } from "react";
import { ButtonGroup, PriceRangeGroup, SelectGroup } from "../../Groups";
import OpenForm from "../../OpenForm";

export interface initialFilterState {
    price?: number[];
    brandId?: string;
    priceMin?: string;
    priceMax?: string;
    cityId?: string;
    typeId?: string;
}

type EstateFormTypes = {
    data: initialFilterState;
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
