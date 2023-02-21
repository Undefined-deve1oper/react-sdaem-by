import httpService from "./http.service";

const estatesEndPoint = "estates";

const postsService = {
    getEstatesByQueryParams: async (params?: any) => {
        const { data } = await httpService.get(estatesEndPoint, {
            params: { ...params }
        });
        return data;
    },
    getEstateById: async (postId: string) => {
        const { data } = await httpService.get(estatesEndPoint + "/" + postId);
        return data;
    }
};

export default postsService;
