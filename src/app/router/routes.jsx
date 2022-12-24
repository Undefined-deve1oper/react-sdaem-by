import React from "react";
import { LocationOn } from "@mui/icons-material";
import { Icon } from "@mui/material";
import Main from "../layouts/Main";
import Login from "../layouts/Login";
import News from "../layouts/News";

export const navigationRoutes = [
    { path: "/", name: "Главная", exact: true },
    { path: "/news", name: "Новости", exact: false },
    {
        path: "/accommodation-and-rates",
        name: "Размещение и тарифы",
        exact: false
    },
    {
        path: "/ads-on-the-map",
        name: "Объявления на карте",
        element: (product) => (
            <>
                <Icon fontSize="inherit" component={LocationOn} />
                {product.name}
            </>
        ),
        exact: false
    },
    { path: "/contacts", name: "Контакты", exact: false }
];

export const productsNavigationRoutes = [
    {
        path: "/apartments-for-a-day/",
        name: "Квартиры на сутки",
        submenu: [
            {
                name: "Квартиры на сутки в Москве",
                path: "/apartments-for-a-day/moscow"
            },
            {
                name: "Квартиры на сутки в Санкт-Петербурге",
                path: "/apartments-for-a-day/saint-petersburg"
            },
            {
                name: "Квартиры на сутки в Екатеринбурге",
                path: "/apartments-for-a-day/ekaterinburg"
            },
            {
                name: "Квартиры на сутки в Омске",
                path: "/apartments-for-a-day/omsk"
            },
            {
                name: "Квартиры на сутки в Красноярске",
                path: "/apartments-for-a-day/krasnoyarsk"
            },
            {
                name: "Квартиры на сутки в Воронеже",
                path: "/apartments-for-a-day/voronezh"
            }
        ],
        iconColor: "secondary.main",
        component: (product) => (
            <>
                {product.name}
                <Icon
                    fontSize="inherit"
                    component={LocationOn}
                    sx={{ color: product.iconColor }}
                />
            </>
        )
    },
    {
        path: "/cottages-and-manor/",
        name: "Коттеджи и усадьбы"
    },
    {
        path: "/baths-and-saunas/",
        name: "Бани и Сауны"
    },
    {
        path: "/car-rental/",
        name: "Авто напрокат"
    }
];

export const routes = [
    { path: "/", component: Main, exact: true },
    { path: "/login/:type?", component: Login, exact: true },
    { path: "/news/:newsId?/", component: News, exact: true }
];
