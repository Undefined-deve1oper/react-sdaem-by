import { CommentType } from "../types/types";
import httpService from "./http.service";

const commentsEndPoint = "comment/";

const commentsService = {
    getAll: async () => {
        const { data } = await httpService.get(commentsEndPoint);
        return data;
    },
    getById: async (reviewId: string) => {
        const { data } = await httpService.get(commentsEndPoint + reviewId);
        return data;
    },
    create: async (payload: CommentType) => {
        const { data } = await httpService.post(commentsEndPoint, payload);
        return data;
    },
    remove: async (id: string) => {
        await httpService.delete(commentsEndPoint + id);
        return id;
    },
    update: async (payload: CommentType) => {
        const { data } = await httpService.patch(
            commentsEndPoint + payload._id,
            payload
        );
        return data;
    }
};

export default commentsService;
