import React from "react";
import { useParams } from "react-router-dom";
import { useStateSelector } from "../../../../store";
import { getEstateRating } from "../../../../store/slices/estates";
import ProgressBar from "../../../common/ProgressBar";

const EstateStatisticsBar: React.FC = () => {
    const { estateId } = useParams<{ estateId: string }>();
    const rating = useStateSelector(getEstateRating(estateId || ""));
    const ratingCount = [5, 4, 3, 2, 1];

    const getPercentOfRate = (rating: string[], ratingItem: any) => {
        let sumOfRating = 0;

        rating.forEach((rate: string) => {
            if (ratingItem === Math.round(+rate)) {
                sumOfRating += 1;
            }
        });

        const percentRateItemOfRating = sumOfRating / (rating.length / 100);
        if (!percentRateItemOfRating) return 0;
        return percentRateItemOfRating;
    };

    if (rating) {
        return (
            <ul className="estate-comments__stat comments-stats">
                {ratingCount.map((item) => (
                    <li key={item} className="comments-stats__item">
                        <span className="comments-stats__rate">{item}</span>
                        <div className="comments-stats__bar">
                            <ProgressBar
                                value={getPercentOfRate(rating, item)}
                            />
                        </div>
                    </li>
                ))}
            </ul>
        );
    }
    return null;
};

export default EstateStatisticsBar;
