import { BookingType } from "../types/types";
import httpService from "./http.service";

const bookingEndpoint = "booking/";

const bookingService = {
    create: async (payload: BookingType) => {
        const { data } = await httpService.post(bookingEndpoint, payload);
        return data;
    },
    fetchAll: async () => {
        const { data } = await httpService.get(bookingEndpoint);
        return data;
    },
    delete: async (id: string) => {
        const { data } = await httpService.delete(bookingEndpoint + id);
        return data;
    }
};

export default bookingService;
