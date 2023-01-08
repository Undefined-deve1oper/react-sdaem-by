import React from "react";
import { NavLink } from "react-router-dom";
import BackgroundParallax from "../../common/BackgroundParallax/BackgroundParallax";
import SearchEstateForm from "../../ui/SearchEstateForm";
import PRODUCT_1 from "../../../assets/img/main-products/product-item-1.jpg";
import PRODUCT_2 from "../../../assets/img/main-products/product-item-2.jpg";
import PRODUCT_3 from "../../../assets/img/main-products/product-item-3.jpg";
import PRODUCT_4 from "../../../assets/img/main-products/product-item-4.jpg";

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
                    <div className="main-products__items item-products">
                        <div className="item-products__row">
                            <div className="item-products__column">
                                <div className="item-products__card product-card">
                                    <div className="product-card__image">
                                        <img src={PRODUCT_1} alt="photo" />
                                    </div>
                                    <div className="product-card__content">
                                        <h3 className="product-card__subtitle">
                                            Снять квартиру
                                        </h3>
                                        <h1 className="product-card__title">
                                            Квартиры на сутки
                                        </h1>
                                        <div className="product-card__badges">
                                            <NavLink
                                                className="product-card__badge"
                                                to={
                                                    "/apartments-for-a-day/moscow"
                                                }
                                            >
                                                Москва
                                            </NavLink>
                                            <NavLink
                                                className="product-card__badge"
                                                to={
                                                    "/apartments-for-a-day/moscow"
                                                }
                                            >
                                                Москва
                                            </NavLink>
                                            <NavLink
                                                className="product-card__badge"
                                                to={
                                                    "/apartments-for-a-day/moscow"
                                                }
                                            >
                                                Москва
                                            </NavLink>
                                            <NavLink
                                                className="product-card__badge"
                                                to={
                                                    "/apartments-for-a-day/moscow"
                                                }
                                            >
                                                Москва
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main-products__links links-products">
                        <div className="links-products__row">
                            <div className="links-products__column">
                                <h3 className="links-products__title">
                                    Квартиры
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
