import React from "react";
import { CheckboxField } from "../../common/Fields";

type CheckboxListType = {
    data: any[];
    onChange: (e: any) => void;
};

const CheckboxList: React.FC<CheckboxListType> = ({ data, onChange }) => {
    return (
        <ul className="checkbox-list">
            {data.map((item: string) => (
                <li key={item} className="checkbox-list__item">
                    <CheckboxField label={item} onChange={onChange} />
                </li>
            ))}
        </ul>
    );
};

export default CheckboxList;
