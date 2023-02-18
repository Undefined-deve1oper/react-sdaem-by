import httpService from "./http.service";

const postsEndPoint = "posts";

const postsService = {
    fetchAll: async (limit, page) => {
        const { data } = await httpService.get(postsEndPoint, {
            params: {
                limit,
                page
            }
        });
        return data;
    },
    getPostById: async (postId) => {
        const { data } = await httpService.get(postsEndPoint + "/" + postId);
        return data;
    }
};

export default postsService;
