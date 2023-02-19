import httpService from "./http.service";

const postsEndPoint = "posts";

const postsService = {
    fetchAll: async (params?: any) => {
        const { data } = await httpService.get(postsEndPoint, {
            params: { ...params }
        });
        return data;
    },
    getPostById: async (postId: string) => {
        const { data } = await httpService.get(postsEndPoint + "/" + postId);
        return data;
    }
};

export default postsService;
