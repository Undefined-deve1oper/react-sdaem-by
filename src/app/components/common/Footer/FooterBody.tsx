import React from 'react';
import Logo from "../Logo";
import {NavLink} from "react-router-dom";

const FooterBody: React.FC = () => {
    return (
        <div className={"footer__body"}>
            <div className="footer__main">
                <Logo className={"footer__logo logo"} />
                <h3 className="footer__subtitle">СДАЁМ БАЙ</h3>
                <div className="footer__text">
                    <p>
                        Sdaem.by - это веб-приложение где вы сможете взять в аренду
                        любую недвижимость, которая вам понравится. Наш email:
                        real-estate@sdaem.by
                    </p>
                </div>
            </div>
            <div className="footer__menu menu-footer">
                <div className="menu-footer__column">
                    <NavLink
                        className={"menu-footer__title _footer-title"}
                        to={"/cottages-and-manor/"}
                    >
                        Коттеджи и усадьбы
                    </NavLink>
                    <NavLink
                        className={"menu-footer__title _footer-title"}
                        to={"/baths-and-saunas/"}
                    >
                        Бани и сауны
                    </NavLink>
                    <NavLink
                        className={"menu-footer__title _footer-title"}
                        to={"/car-rental/"}
                    >
                        Авто на прокат
                    </NavLink>
                </div>
                <div className="menu-footer__column menu-footer__column_big">
                    <NavLink
                        className={"menu-footer__title _small _footer-title"}
                        to={"/apartments-for-a-day/"}
                    >
                        Квартиры
                    </NavLink>
                    <ul className="menu-footer__list">
                        <li className="menu-footer__item">
                            <NavLink
                                className="menu-footer__link"
                                to={"/apartments-for-a-day/moscow/"}
                            >
                                Квартиры в Москве
                            </NavLink>
                            <NavLink
                                className="menu-footer__link"
                                to={"/apartments-for-a-day/saint-petersburg/"}
                            >
                                Квартиры в Санкт-Петербурге
                            </NavLink>
                            <NavLink
                                className="menu-footer__link"
                                to={"/apartments-for-a-day/ekaterinburg/"}
                            >
                                Квартиры в Екатеринбурге
                            </NavLink>
                        </li>
                        <li className="menu-footer__item">
                            <NavLink
                                className="menu-footer__link"
                                to={"/apartments-for-a-day/omsk/"}
                            >
                                Квартиры в Омске
                            </NavLink>
                            <NavLink
                                className="menu-footer__link"
                                to={"/apartments-for-a-day/krasnoyarsk/"}
                            >
                                Квартиры в Красноярске
                            </NavLink>
                            <NavLink
                                className="menu-footer__link"
                                to={"/apartments-for-a-day/voronezh/"}
                            >
                                Квартиры в Воронеже
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="menu-footer__column">
                    <ul
                        className="menu-footer__list"
                        style={{
                            flexDirection: "column",
                            alignItems: "flex-start"
                        }}
                    >
                        <li className="menu-footer__item">
                            <NavLink className="menu-footer__link" to={"/news/"}>
                                Новости
                            </NavLink>
                            <NavLink
                                className="menu-footer__link"
                                to={"/accommodation-and-rates/"}
                            >
                                Размещение и тарифы
                            </NavLink>
                            <NavLink
                                className="menu-footer__link"
                                to={"/ads-on-the-map"}
                            >
                                Объявления на карте
                            </NavLink>
                            <NavLink className="menu-footer__link" to={"/contacts"}>
                                Контакты
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default FooterBody;