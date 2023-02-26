import React from "react";
import { initialFilterState } from "../Forms/SearchEstateForm/SearchEstateForm";
import { CheckboxGroup, DetailSelectGroup } from "../Groups";

type OpenFormTypes = {
    data: initialFilterState;
    onChange: (target: any) => void;
};

const OpenForm: React.FC<OpenFormTypes> = ({ data, onChange }) => {
    return (
        <div className="modal-options">
            <div className="modal-options__body">
                <div className="modal-options__selects">
                    <DetailSelectGroup data={data} onChange={onChange} />
                </div>
                <div className="modal-options__checkboxs">
                    <CheckboxGroup />
                </div>
            </div>
        </div>
    );
};

export default OpenForm;
