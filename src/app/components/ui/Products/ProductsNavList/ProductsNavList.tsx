import React from "react";
import { NavLink } from "react-router-dom";
import { ILink } from "../../../../router/navigationConfig";
import ProductsNavItem from "../ProductsNavItem";

type ProductsNavListType = {
    items: ILink[];
};

const ProductsNavList: React.FC<ProductsNavListType> = ({ items }) => {
    return (
        <ul className="links-products__list">
            {items.map((item) => (
                <ProductsNavItem
                    label={item.label}
                    path={item.path}
                    key={item.path}
                    totalCount={item.totalCount}
                />
            ))}
        </ul>
    );
};

export default ProductsNavList;
