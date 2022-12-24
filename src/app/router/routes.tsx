import React from "react";
import {LocationOn} from "@mui/icons-material";
import {SvgIconTypeMap} from "@mui/material";
import {OverridableComponent} from "@mui/material/OverridableComponent";

const Login = React.lazy(() => import('../layouts/login'));
const Main = React.lazy(() => import('../layouts/main'));
const News = React.lazy(() => import('../layouts/news'));


export type RoutesNavType = {
    path: string;
    name: string;
    exact?: boolean;
    submenu?: RoutesNavType[];
    icon?: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
        muiName: string;
    };
};

export const navigationRoutes = [
    {path: "/", name: "Главная", exact: true},
    {path: "/news", name: "Новости", exact: false},
    {
        path: "/accommodation-and-rates",
        name: "Размещение и тарифы",
        exact: false
    },
    {
        path: "/ads-on-the-map",
        name: "Объявления на карте",
        exact: false,
        icon: LocationOn
    },
    {path: "/contacts", name: "Контакты", exact: false}
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
    {path: "/", component: Main, exact: true},
    {path: "/login/:type?", component: Login, exact: true},
    {path: "/news/:newsId?", component: News, exact: true}
];
