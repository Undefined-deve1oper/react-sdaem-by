import React from "react";

interface ISkeletonElement {
    type: string;
}

const SkeletonElement: React.FC<ISkeletonElement> = ({ type }) => {
    const classes = `skeleton ${type}`;

    return <div className={classes}></div>;
};

export default SkeletonElement;
