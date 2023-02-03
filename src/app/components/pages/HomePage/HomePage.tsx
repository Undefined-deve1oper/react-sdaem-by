import React from "react";
import { Filter } from "./section-filter/Filter";

const HomePage: React.FC = () => {
    return (
        <main className="page">
            <Filter />
            {/* <Gallery /> */}
            {/* <Rent /> */}
            {/* <Presentation /> */}
            {/* <About /> */}
        </main>
    );
};

export default HomePage;

{
    /* <section className="page__main-search main-search">
                <div className="main-search__container _container">
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
            </section> */
}
