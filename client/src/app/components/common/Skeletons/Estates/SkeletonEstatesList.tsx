import React from "react";
import SkeletonElement from "../SkeletonElement";
import SkeletonEstateCard from "./SkeletonEstateCard";

interface ISkeletonPostsList {
    count?: number;
}

const SkeletonPostsList: React.FC<ISkeletonPostsList> = ({ count = 6 }) => {
    return (
        <div className="skeleton-estates">
            <div className="skeleton-estates__header">
                <SkeletonElement type="select" />
                <div className="skeleton-estates__view">
                    <SkeletonElement type="view" />
                    <SkeletonElement type="view" />
                </div>
            </div>
            <SkeletonElement type="estate-title" />
            <ul className="skeleton-estates__list">
                {Array(count)
                    .fill("")
                    .map((_, index) => (
                        <li
                            key={count - index}
                            className="skeleton-estates__item"
                        >
                            <SkeletonEstateCard />
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default SkeletonPostsList;
