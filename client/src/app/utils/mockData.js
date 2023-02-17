import { useState } from "react";
import baths from "../mockData/baths.json";
import cars from "../mockData/cars.json";
import contacts from "../mockData/contacts.json";
import cottages from "../mockData/cottages.json";
import flats from "../mockData/flats.json";
import menuList from "../mockData/menuList.json";
import navigation from "../mockData/navigation.json";
import posts from "../mockData/posts.json";
import sidebar from "../mockData/sidebar.json";
import httpService from "../services/http.service";

const useMockData = () => {
    const [error, setError] = useState(null);

    async function initialize() {
        try {
            console.log("fdsfds");
            // await httpService.put("sidebar/", sidebar);
        } catch (error) {
            setError(error);
        }
    }

    return { error, initialize };
};

export default useMockData;
