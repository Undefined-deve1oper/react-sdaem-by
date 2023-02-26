import React from "react";
import Shimmer from "../Shimmer";
import SkeletonElement from "../SkeletonElement";

interface ISkeletonPostCard {
    theme?: string;
}

const SkeletonPostCard: React.FC<ISkeletonPostCard> = ({ theme }) => {
    const themeClass = theme || "light";

    return (
        <div className={`skeleton-wrapper ${themeClass}`}>
            <div className="skeleton-post">
                <SkeletonElement type="image" />
                <div className="skeleton-post__content">
                    <SkeletonElement type="title" />
                    <SkeletonElement type="text" />
                    <SkeletonElement type="line" />
                    <div className="skeleton-buttons">
                        <SkeletonElement type="button" />
                        <SkeletonElement type="button" />
                    </div>
                </div>
            </div>
            <Shimmer />
        </div>
    );
};

export default SkeletonPostCard;
