import React, { useContext } from "react";

import { RatingContext } from "./Rating";

const StarRatingLabel: React.FC = () => {
    const { labelText } = useContext<any>(RatingContext);

    return <div className="rating__title">{labelText}</div>;
};

export default StarRatingLabel;
