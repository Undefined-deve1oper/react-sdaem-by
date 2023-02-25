import { TypeType } from "../types/types";
import httpService from "./http.service";

const typeEndpoint = "type/";

const brandService = {
    create: async (payload: TypeType) => {
        const { data } = await httpService.post(typeEndpoint, payload);
        return data;
    },
    fetchAll: async () => {
        const { data } = await httpService.get(typeEndpoint);
        return data;
    },
    delete: async (id: string) => {
        const { data } = await httpService.delete(typeEndpoint + id);
        return data;
    }
};

export default brandService;
