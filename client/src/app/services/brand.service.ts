import { BrandType } from "../types/types";
import httpService from "./http.service";

const brandEndpoint = "brand/";

const brandService = {
    create: async (payload: BrandType) => {
        const { data } = await httpService.post(brandEndpoint, payload);
        return data;
    },
    fetchAll: async () => {
        const { data } = await httpService.get(brandEndpoint);
        return data;
    },
    delete: async (id: string) => {
        const { data } = await httpService.delete(brandEndpoint + id);
        return data;
    }
};

export default brandService;
