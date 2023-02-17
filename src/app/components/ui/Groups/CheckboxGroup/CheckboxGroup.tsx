import React from "react";
import { games, kitchen } from "../../../../constants/checkbox";
import CheckboxList from "../../CheckboxList";

const CheckboxGroup: React.FC = () => {
    const handleChange = (e: any) => {
        console.log("CHECKBOX DATA---", e);
    };

    return (
        <div className="checkbox-wrapper">
            <CheckboxList data={kitchen} onChange={handleChange} />
            <CheckboxList data={games} onChange={handleChange} />
        </div>
    );
};

export default CheckboxGroup;
