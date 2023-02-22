import { BookingType } from "../types/types";
import httpService from "./http.service";

const bookingEndPoint = "booking/";

const bookingService = {
    create: async (payload: BookingType) => {
        const { data } = await httpService.post(bookingEndPoint, payload);
        return data;
    },
    fetchAll: async () => {
        const { data } = await httpService.get(bookingEndPoint);
        return data;
    },
    delete: async (id: string) => {
        const { data } = await httpService.delete(bookingEndPoint + id);
        return data;
    }
};

export default bookingService;
