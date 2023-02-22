import React from "react";

interface IRatingList {
    value: string | number;
}

const RatingList: React.FC<IRatingList> = ({ value }) => {
    const items = Array.from({ length: 5 }, (_, index) => ({
        count: index + 1,
        isActive: +value > index
    }));

    return (
        <div className="rating__list">
            {items.map((item: { count: number; isActive: boolean }) => (
                <span
                    key={item.count}
                    className={
                        "rating__item" + (item.isActive ? " _active" : "")
                    }
                ></span>
            ))}
        </div>
    );
};

export default RatingList;
