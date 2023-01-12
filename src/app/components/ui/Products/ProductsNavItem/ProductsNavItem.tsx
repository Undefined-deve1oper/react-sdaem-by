import React from "react";
import { NavLink } from "react-router-dom";

type ProductsNavItemType = {
    path: string;
    label: string;
    totalCount: number | undefined;
};

const ProductsNavItem: React.FC<ProductsNavItemType> = ({
    path,
    label,
    totalCount
}) => {
    return (
        <li className="links-products__item">
            <NavLink className="links-products__link" to={path} key={path}>
                {label}
            </NavLink>
            <p className="links-products__quantity">{totalCount}</p>
        </li>
    );
};

export default ProductsNavItem;
