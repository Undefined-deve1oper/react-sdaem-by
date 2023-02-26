import httpService from "./http.service";

const favouritesEndpoint = "favourite/";

const favouritesService = {
    fetchAll: async () => {
        const { data } = await httpService.get(favouritesEndpoint);
        return data;
    },
    getByFavouriteId: async (favouriteId: string) => {
        const { data } = await httpService.get(favouritesEndpoint, {
            params: {
                orderBy: "favouriteId",
                equalTo: `${favouriteId}`
            }
        });
        return data;
    },
    getByUserId: async (userId: string) => {
        const { data } = await httpService.get(favouritesEndpoint, {
            params: {
                orderBy: "userId",
                equalTo: `${userId}`
            }
        });
        return data;
    },
    create: async (payload: { userId: string; estateId: string }) => {
        const { data } = await httpService.post(favouritesEndpoint, payload);
        return data;
    },
    remove: async (id: string) => {
        await httpService.delete(favouritesEndpoint + id);
        return id;
    }
};

export default favouritesService;
