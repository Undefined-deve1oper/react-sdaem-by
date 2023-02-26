import React, { useState } from "react";
import { FilterData } from "../../../../hooks/useFilters";
import { ButtonGroup, PriceRangeGroup, SelectGroup } from "../../Groups";
import OpenForm from "../../OpenForm";

type EstateFormTypes = {
    data: FilterData;
    count?: number;
    onChange: (e: any) => void;
    handleReset: (e: any) => void;
};

const EstateForm: React.FC<EstateFormTypes> = ({
    data,
    count,
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
                        count={count}
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
