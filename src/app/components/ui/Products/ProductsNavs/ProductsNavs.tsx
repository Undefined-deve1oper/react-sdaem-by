import React from "react";
import { productsLinks } from "../../../../router/navigationConfig";
import ProductsNavList from "../ProductsNavList";

const ProductsNavs = () => {
    const { navigationLinks } = productsLinks;

    return (
        <div className="main-products__links links-products">
            <div className="links-products__row">
                <div className="links-products__column">
                    <h3 className="links-products__title">Квартиры</h3>
                    <ProductsNavList items={navigationLinks.apartments} />
                </div>
                <div className="links-products__column">
                    <h3 className="links-products__title">
                        Коттеджи и усадьбы
                    </h3>
                    <ProductsNavList items={navigationLinks.cottages} />
                </div>
            </div>
        </div>
    );
};

export default ProductsNavs;
