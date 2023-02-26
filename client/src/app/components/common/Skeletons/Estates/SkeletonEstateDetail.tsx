import React from "react";
import Shimmer from "../Shimmer";
import SkeletonElement from "../SkeletonElement";

interface ISkeletonEstateDetail {
    theme?: string;
}

const SkeletonEstateDetail: React.FC<ISkeletonEstateDetail> = ({ theme }) => {
    const themeClass = theme || "light";

    return (
        <div className={`skeleton-wrapper transparent ${themeClass}`}>
            <div className="skeleton-estate">
                <div className="skeleton-estate__header">
                    <SkeletonElement type="details-title" />
                    <div className="skeleton__share">
                        <SkeletonElement type="button" />
                        <div className="skeleton-social">
                            <SkeletonElement type="small-title" />
                            <div className="skeleton-social__row">
                                <SkeletonElement type="social-icon" />
                                <SkeletonElement type="social-icon" />
                                <SkeletonElement type="social-icon" />
                                <SkeletonElement type="social-icon" />
                                <SkeletonElement type="social-icon" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="skeleton__body">
                    <SkeletonElement type="details-image" />
                    <SkeletonElement type="details-text min" />
                    <SkeletonElement type="details-text big" />
                    <SkeletonElement type="details-text big" />
                    <SkeletonElement type="details-text middle" />
                    <SkeletonElement type="details-text min" />
                </div>
            </div>
            <Shimmer />
        </div>
    );
};

export default SkeletonEstateDetail;
