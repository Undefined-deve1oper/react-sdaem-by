import { IEntity, IEntityObject } from "../../types/interfaces";

export const citiesObject: IEntityObject = {
    voronezh: {
        _id: "67rdca3eeb7f6fgeed471829",
        name: "Воронеж"
    },
    ekaterinburg: {
        _id: "67rdca3eeb7f6fgeed471814",
        name: "Екатеринбург"
    },
    krasnoyarsk: {
        _id: "67rdca3eeb7f6fgeed471824",
        name: "Красноярск"
    },
    moscow: {
        _id: "67rdca3eeb7f6fgeed471818",
        name: "Москва"
    },
    omsk: {
        _id: "67rdca3eeb7f6fgeed471822",
        name: "Омск"
    },
    saintPetersburg: {
        _id: "67rdca3eeb7f6fgeed471820",
        name: "Санкт-Петербург"
    }
};
export const cities: IEntity[] = [
    {
        _id: "67rdca3eeb7f6fgeed471829",
        name: "Воронеж"
    },
    {
        _id: "67rdca3eeb7f6fgeed471814",
        name: "Екатеринбург"
    },
    {
        _id: "67rdca3eeb7f6fgeed471824",
        name: "Красноярск"
    },
    {
        _id: "67rdca3eeb7f6fgeed471818",
        name: "Москва"
    },
    {
        _id: "67rdca3eeb7f6fgeed471822",
        name: "Омск"
    },
    {
        _id: "67rdca3eeb7f6fgeed471820",
        name: "Санкт-Петербург"
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
