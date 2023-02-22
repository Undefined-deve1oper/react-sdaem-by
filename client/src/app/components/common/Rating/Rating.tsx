import React from "react";
import RatingList from "../RatingList";

interface IRating {
    value: string | number;
    label?: string;
}

const Rating: React.FC<IRating> = ({ value, label }) => {
    return (
        <div className="rating">
            {label && <h1 className="rating__title">{label}</h1>}
            <RatingList value={value} />
        </div>
    );
};

export default Rating;
