import React from "react";
import { NavLink } from "react-router-dom";
import BackgroundParallax from "../../common/BackgroundParallax/BackgroundParallax";
import SearchEstateForm from "../../ui/SearchEstateForm";
import { ProductsList } from "../../ui/Products";

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

                    <div className="main-products__links links-products">
                        <div className="links-products__row">
                            <div className="links-products__column">
                                <h3 className="links-products__title">
                                    Квартиры
                                </h3>
                                <ul className="links-products__list">
                                    <li className="links-products__item">
                                        <NavLink
                                            className="links-products__link"
                                            to={"/apartments-for-a-day/moscow"}
                                        >
                                            Квартиры в Москве
                                        </NavLink>
                                        <p className="links-products__quantity">
                                            3567
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div className="links-products__column">
                                <h3 className="links-products__title">
                                    Коттеджи и усадьбы
                                </h3>
                                <div className="links-products__list">
                                    <li className="links-products__item">
                                        <NavLink
                                            className="links-products__link"
                                            to={"/apartments-for-a-day/moscow"}
                                        >
                                            Квартиры в Москве
                                        </NavLink>
                                        <p className="links-products__quantity">
                                            3567
                                        </p>
                                    </li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default HomePage;
