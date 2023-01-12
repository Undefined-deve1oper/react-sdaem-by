import React from "react";
import { NavLink } from "react-router-dom";
import BackgroundParallax from "../../common/BackgroundParallax/BackgroundParallax";
import SearchEstateForm from "../../ui/SearchEstateForm";
import { ProductsList } from "../../ui/Products";
import ProductsNavs from "../../ui/Products/ProductsNavs";

const HomePage: React.FC = () => {
    return (
        <main className="page">
            <section className="page__main-search main-search">
                <div className="main-search__container _container">
                    <BackgroundParallax
                        className="main-search__parallax"
                        itemsClassName="main-search__background"
                    />
                    <div className="main-search__body">
                        <div className="main-search__title">
                            Sdaem.by - у нас живут <span>ваши объявления</span>
                        </div>
                        <SearchEstateForm />
                    </div>
                </div>
            </section>
            <section className="page__main-products main-products">
                <div className="main-products__container _container">
                    <ProductsList />
                    <ProductsNavs />
                </div>
            </section>
        </main>
    );
};

export default HomePage;
