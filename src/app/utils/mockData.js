import { useState } from "react";
import baths from "../mockData/baths.json";
import cars from "../mockData/cars.json";
import contacts from "../mockData/contacts.json";
import cottages from "../mockData/cottages.json";
import flats from "../mockData/flats.json";
import menuList from "../mockData/menuList.json";
import navigation from "../mockData/navigation.json";
import news from "../mockData/news.json";
import sidebar from "../mockData/sidebar.json";
import options from "../config/options.json";
import httpService from "../services/http.service";

const useMockData = () => {
    const [error, setError] = useState(null);

    async function initialize() {
        try {
            console.log("fdsfds");
            await httpService.patch("options/", options);
        } catch (error) {
            setError(error);
        }
    }

    return { error, initialize };
};

export default useMockData;
