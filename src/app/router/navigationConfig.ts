export interface ILink {
    label: string;
    path: string;
    totalCount?: number;
}

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
            title: "Объявления на карте"
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

export const productsLinks = {
    navigationLinks: {
        apartments: [
            {
                label: "Квартиры в Москве",
                path: "/apartments-for-a-day/moscow",
                totalCount: 3567
            },
            {
                label: "Квартиры в Воронеже",
                path: "apartments-for-a-day/voronezh",
                totalCount: 2032
            },
            {
                label: "Квартиры в Красноярске",
                path: "/apartments-for-a-day/krasnoyarsk",
                totalCount: 2302
            },
            {
                label: "Квартиры в Санкт-Петербурге",
                path: "/apartments-for-a-day/saint-petersburg",
                totalCount: 110
            },
            {
                label: "Квартиры в Омске",
                path: "/apartments-for-a-day/omsk",
                totalCount: 110
            },
            {
                label: "Квартиры в Екатеринбурге",
                path: "/apartments-for-a-day/ekaterinburg",
                totalCount: 110
            }
        ],
        cottages: [
            {
                label: "Аггроусадьбы",
                path: "/cottages-and-manor/aggro-estates",
                totalCount: 110
            },
            {
                label: "Коттеджи",
                path: "/cottages-and-manor/cottages",
                totalCount: 110
            },
            {
                label: "Загородный комплекс",
                path: "/cottages-and-manor/country-complex",
                totalCount: 110
            },
            {
                label: "Базы отдыха",
                path: "/cottages-and-manor/recreation-centers",
                totalCount: 110
            }
        ]
    },
    mainLinks: [
        {
            label: "Воронеж",
            path: "apartments-for-a-day/voronezh"
        },
        {
            label: "Екатеринбург",
            path: "/apartments-for-a-day/ekaterinburg"
        },
        {
            label: "Красноярск",
            path: "/apartments-for-a-day/krasnoyarsk"
        },
        {
            label: "Москва",
            path: "/apartments-for-a-day/moscow"
        },
        {
            label: "Омск",
            path: "/apartments-for-a-day/omsk"
        },
        {
            label: "Санкт-Петербург",
            path: "/apartments-for-a-day/saint-petersburg"
        }
    ]
};
