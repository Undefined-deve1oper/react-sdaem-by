import { CityType } from "../types/types";
import httpService from "./http.service";

const cityEndpoint = "city/";

const cityService = {
    create: async (payload: CityType) => {
        const { data } = await httpService.post(cityEndpoint, payload);
        return data;
    },
    fetchAll: async () => {
        const { data } = await httpService.get(cityEndpoint);
        return data;
    },
    delete: async (id: string) => {
        const { data } = await httpService.delete(cityEndpoint + id);
        return data;
    }
};

export default cityService;
