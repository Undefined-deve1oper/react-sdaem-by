import React from "react";
import { FilterData } from "../../../hooks/useFilters";
import { CheckboxGroup, DetailSelectGroup } from "../Groups";

type OpenFormTypes = {
    data: FilterData;
    onChange: (target: any) => void;
};

const OpenForm: React.FC<OpenFormTypes> = ({ data, onChange }) => {
    return (
        <div className="modal-options">
            <div className="modal-options__body">
                <div className="modal-options__selects">
                    <DetailSelectGroup data={data} onChange={onChange} />
                </div>
            </div>
        </div>
    );
};

export default OpenForm;
