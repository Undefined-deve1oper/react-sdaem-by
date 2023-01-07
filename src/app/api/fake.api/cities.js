export const citiesObject = {
    moscow: { _id: "67rdca3eeb7f6fgeed471818", name: "Москва" },
    saintPetersburg: {
        _id: "67rdca3eeb7f6fgeed471820",
        name: "Санкт-Петербург"
    },
    ekaterinburg: { _id: "67rdca3eeb7f6fgeed471814", name: "Екатеринбург" },
    omsk: { _id: "67rdca3eeb7f6fgeed471822", name: "Омск" },
    krasnoyarsk: { _id: "67rdca3eeb7f6fgeed471824", name: "Красноярск" },
    voronezh: { _id: "67rdca3eeb7f6fgeed471829", name: "Воронеж" }
};
export const cities = [
    { _id: "67rdca3eeb7f6fgeed471818", name: "Москва" },
    { _id: "67rdca3eeb7f6fgeed471820", name: "Санкт-Петербург" },
    { _id: "67rdca3eeb7f6fgeed471814", name: "Екатеринбург" },
    { _id: "67rdca3eeb7f6fgeed471822", name: "Омск" },
    { _id: "67rdca3eeb7f6fgeed471824", name: "Красноярск" },
    { _id: "67rdca3eeb7f6fgeed471829", name: "Воронеж" }
];
const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(citiesObject);
        }, 2000);
    });

export default {
    fetchAll
};
