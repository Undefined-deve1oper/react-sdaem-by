import React from "react";
import PRODUCT_1 from "../../../../assets/img/main-products/product-item-1.jpg";
import PRODUCT_2 from "../../../../assets/img/main-products/product-item-2.jpg";
import PRODUCT_3 from "../../../../assets/img/main-products/product-item-3.jpg";
import PRODUCT_4 from "../../../../assets/img/main-products/product-item-4.jpg";
import ProductsItem from "../ProductsItem";

const ProductsList: React.FC = () => {
    return (
        <div className="main-products__items item-products">
            <div className="item-products__row">
                <div className="item-products__column _big">
                    <ProductsItem
                        image={PRODUCT_1}
                        title="Квартиры на сутки"
                        subtitle="Снять квартиру"
                    />
                </div>
                <div className="item-products__column">
                    <ProductsItem
                        image={PRODUCT_2}
                        title="Коттеджи и усадьбы"
                        subtitle="Снять коттедж на праздник"
                    />
                </div>
                <div className="item-products__column">
                    <ProductsItem
                        image={PRODUCT_3}
                        title="Бани и сауны"
                        subtitle="Попариться в Бане с друзьями"
                    />
                </div>
                <div className="item-products__column _big">
                    <ProductsItem
                        image={PRODUCT_4}
                        title="Авто на прокат"
                        subtitle="Если срочно нужна машина"
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductsList;
