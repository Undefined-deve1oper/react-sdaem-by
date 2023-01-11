import { ArrowForwardIos } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import API from "../../../../api";
import { IOption } from "../../../../types/select";

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
    const [cities, setCities] = useState<IOption[]>([]);

    useEffect(() => {
        API.cities.fetchAll().then((data) => {
            const citiesList = Object.keys(data).map((cityName) => ({
                label: data[cityName].name,
                value: data[cityName]._id,
                link: data[cityName].link
            }));
            setCities(citiesList);
        });
    }, []);

    return (
        <div className="item-products__card product-card">
            <div className="product-card__image">
                <img src={image} alt="photo" />
            </div>
            <div className="product-card__content">
                <h3 className="product-card__subtitle">{subtitle}</h3>
                <h1 className="product-card__title">{title}</h1>
                <div className="product-card__badges">
                    {cities.map((city) => (
                        <NavLink
                            className="product-card__badge"
                            to={city.link || "/apartments-for-a-day/"}
                            key={city.value}
                        >
                            {city.label}
                        </NavLink>
                    ))}
                </div>
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
