import React from "react";
import { ArrowForwardIos } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { productsLinks } from "../../../../router/navigationConfig";
import ProductsBadges from "../ProductsBadges";

type ProductsItemType = {
    subtitle: string;
    title: string;
    image: string;
    mainLink?: string;
};

const ProductsItem: React.FC<ProductsItemType> = ({
    subtitle,
    title,
    image,
    mainLink
}) => {
    const { mainLinks } = productsLinks;

    return (
        <div className="item-products__card product-card">
            <div className="product-card__image">
                <img src={image} alt="photo" />
            </div>
            <div className="product-card__content">
                <h3 className="product-card__subtitle">{subtitle}</h3>
                <h1 className="product-card__title">{title}</h1>
                <ProductsBadges badges={mainLinks} />
            </div>
            <NavLink
                to={mainLink || "/apartments-for-a-day/"}
                className="product-card__button"
            >
                <ArrowForwardIos />
            </NavLink>
        </div>
    );
};

export default ProductsItem;
