import React, { useContext } from "react";
import Star from "./Star";

import { RatingContext } from "./Rating";

const StarsList: React.FC = () => {
    const { maxValue } = useContext<any>(RatingContext);

    return (
        <div className="star-rating">
            {[...Array(maxValue)].map((star, index) => {
                const value = index + 1;

                return <Star key={index} value={value} />;
            })}
        </div>
    );
};

export default StarsList;
