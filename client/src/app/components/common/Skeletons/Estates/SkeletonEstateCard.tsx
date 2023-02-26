import React from "react";
import Shimmer from "../Shimmer";
import SkeletonElement from "../SkeletonElement";

interface ISkeletonEstateCard {
    theme?: string;
}

const SkeletonEstateCard: React.FC<ISkeletonEstateCard> = ({ theme }) => {
    const themeClass = theme || "light";

    return (
        <div className={`skeleton-wrapper ${themeClass}`}>
            <div className="skeleton-estate">
                <SkeletonElement type="image" />
                <div className="skeleton-estate__content">
                    <SkeletonElement type="estate-price-title" />
                    <SkeletonElement type="estate-info-title" />
                    <SkeletonElement type="location" />
                    <SkeletonElement type="text" />
                    <SkeletonElement type="line" />
                    <div className="skeleton-buttons">
                        <SkeletonElement type="estate-favourite" />
                        <SkeletonElement type="estate-button" />
                        <SkeletonElement type="estate-button" />
                    </div>
                </div>
            </div>
            <Shimmer />
        </div>
    );
};

export default SkeletonEstateCard;
