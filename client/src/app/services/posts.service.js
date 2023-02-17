import httpService from "./http.service";

const postsEndPoint = "posts/";

const postsService = {
    fetchAll: async () => {
        const { data } = await httpService.get(postsEndPoint);
        return data;
    },
    getPostById: async (postId) => {
        const { data } = await httpService.get(postsEndPoint + postId);
        return data;
    }
};

export default postsService;
