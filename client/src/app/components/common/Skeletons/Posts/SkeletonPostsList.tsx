import React from "react";
import SkeletonPostCard from "./SkeletonPostCard";

interface ISkeletonPostsList {
    count?: number;
}

const SkeletonPostsList: React.FC<ISkeletonPostsList> = ({ count = 6 }) => {
    return (
        <div className="skeleton-posts">
            <ul className="skeleton-posts__list">
                {Array(count)
                    .fill("")
                    .map((_, index) => (
                        <li
                            key={count - index}
                            className="skeleton-posts__item"
                        >
                            <SkeletonPostCard />
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default SkeletonPostsList;
