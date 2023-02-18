import httpService from "./http.service";

const postsEndPoint = "posts";

const postsService = {
    fetchAll: async (params) => {
        const { data } = await httpService.get(postsEndPoint, {
            params: { ...params }
        });
        return data;
    },
    getPostById: async (postId) => {
        const { data } = await httpService.get(postsEndPoint + "/" + postId);
        return data;
    }
};

export default postsService;
