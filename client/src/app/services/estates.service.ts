import { EstateItem } from "./../store/slices/estates";
import httpService from "./http.service";

const estatesEndPoint = "estates";

const postsService = {
    fetchAll: async (params?: any) => {
        const { data } = await httpService.get(estatesEndPoint, {
            params: { ...params }
        });
        return data;
    },
    getEstateById: async (postId: string) => {
        const { data } = await httpService.get(estatesEndPoint + "/" + postId);
        return data;
    },
    update: async (payload: EstateItem) => {
        const { data } = await httpService.patch(
            estatesEndPoint + "/" + payload._id,
            payload
        );
        return data;
    }
};

export default postsService;
