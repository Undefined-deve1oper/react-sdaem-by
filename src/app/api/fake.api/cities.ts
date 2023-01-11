import { IEntity, IEntityObject } from "../../types/interfaces";

export const citiesObject: IEntityObject = {
    moscow: {
        _id: "67rdca3eeb7f6fgeed471818",
        name: "Москва",
        link: "/apartments-for-a-day/moscow"
    },
    saintPetersburg: {
        _id: "67rdca3eeb7f6fgeed471820",
        name: "Санкт-Петербург",
        link: "/apartments-for-a-day/saint-petersburg"
    },
    ekaterinburg: {
        _id: "67rdca3eeb7f6fgeed471814",
        name: "Екатеринбург",
        link: "/apartments-for-a-day/ekaterinburg"
    },
    omsk: {
        _id: "67rdca3eeb7f6fgeed471822",
        name: "Омск",
        link: "/apartments-for-a-day/omsk"
    },
    krasnoyarsk: {
        _id: "67rdca3eeb7f6fgeed471824",
        name: "Красноярск",
        link: "/apartments-for-a-day/krasnoyarsk"
    },
    voronezh: {
        _id: "67rdca3eeb7f6fgeed471829",
        name: "Воронеж",
        link: "apartments-for-a-day/voronezh"
    }
};
export const cities: IEntity[] = [
    {
        _id: "67rdca3eeb7f6fgeed471818",
        name: "Москва",
        link: "apartments-for-a-day/moscow"
    },
    {
        _id: "67rdca3eeb7f6fgeed471820",
        name: "Санкт-Петербург",
        link: "apartments-for-a-day/saint-petersburg"
    },
    {
        _id: "67rdca3eeb7f6fgeed471814",
        name: "Екатеринбург",
        link: "apartments-for-a-day/ekaterinburg"
    },
    {
        _id: "67rdca3eeb7f6fgeed471822",
        name: "Омск",
        link: "apartments-for-a-day/omsk"
    },
    {
        _id: "67rdca3eeb7f6fgeed471824",
        name: "Красноярск",
        link: "apartments-for-a-day/krasnoyarsk"
    },
    {
        _id: "67rdca3eeb7f6fgeed471829",
        name: "Воронеж",
        link: "apartments-for-a-day/voronezh"
    }
];
const fetchAll = () =>
    new Promise<IEntityObject>((resolve) => {
        window.setTimeout(function () {
            resolve(citiesObject);
        }, 2000);
    });

export default {
    fetchAll
};
