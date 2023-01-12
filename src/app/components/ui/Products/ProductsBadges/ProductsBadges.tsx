import React from "react";
import { NavLink } from "react-router-dom";
import { ILink } from "../../../../router/navigationConfig";

type ProductsBadgesType = {
    badges: ILink[];
};

const ProductsBadges: React.FC<ProductsBadgesType> = ({ badges }) => {
    return (
        <div className="product-card__badges">
            {badges.map((badge) => (
                <NavLink
                    className="product-card__badge"
                    to={badge.path || "/apartments-for-a-day/"}
                    key={badge.path}
                >
                    {badge.label}
                </NavLink>
            ))}
        </div>
    );
};

export default ProductsBadges;
