import React from "react";
import Shimmer from "../Shimmer";
import SkeletonElement from "../SkeletonElement";

interface ISkeletonPostDetail {
    theme?: string;
}

const SkeletonPostDetail: React.FC<ISkeletonPostDetail> = ({ theme }) => {
    const themeClass = theme || "light";

    return (
        <div className={`skeleton-wrapper ${themeClass}`}>
            <div className="skeleton-post">
                <SkeletonElement type="details-title" />
                <div className="skeleton__share">
                    <SkeletonElement type="button" />
                    <div className="social">
                        <SkeletonElement type="small-title" />
                        <div className="social__row">
                            <SkeletonElement type="social-icon" />
                            <SkeletonElement type="social-icon" />
                            <SkeletonElement type="social-icon" />
                            <SkeletonElement type="social-icon" />
                            <SkeletonElement type="social-icon" />
                        </div>
                    </div>
                </div>
                <SkeletonElement type="details-image" />
                <SkeletonElement type="details-text" />
                <SkeletonElement type="details-text" />
                <SkeletonElement type="details-text" />
                <SkeletonElement type="details-text" />
            </div>
            <Shimmer />
        </div>
    );
};

export default SkeletonPostDetail;
