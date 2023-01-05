import { LocationOn } from "@mui/icons-material";

export const headerLinks = {
    navigationLinks: [
        { path: "/", title: "Главная" },
        { path: "/news", title: "Новости" },
        {
            path: "/accommodation-and-rates",
            title: "Размещение и тарифы"
        },
        {
            path: "/ads-on-the-map",
            title: "Объявления на карте",
            icon: LocationOn
        },
        { path: "/contacts", title: "Контакты" }
    ],
    productsLinks: [
        {
            path: "/apartments-for-a-day/",
            title: "Квартиры на сутки",
            submenu: [
                {
                    path: "moscow",
                    title: "Квартиры на сутки в Москве"
                },
                {
                    path: "saint-petersburg",
                    title: "Квартиры на сутки в Санкт-Петербурге"
                },
                {
                    path: "ekaterinburg",
                    title: "Квартиры на сутки в Екатеринбурге"
                },
                {
                    path: "omsk",
                    title: "Квартиры на сутки в Омске"
                },
                {
                    path: "krasnoyarsk",
                    title: "Квартиры на сутки в Красноярске"
                },
                {
                    path: "voronezh",
                    title: "Квартиры на сутки в Воронеже"
                }
            ]
        },
        {
            path: "/cottages-and-manor/",
            title: "Коттеджи и усадьбы"
        },
        {
            path: "/baths-and-saunas/",
            title: "Бани и Сауны"
        },
        {
            path: "/car-rental/",
            title: "Авто напрокат"
        }
    ]
};
