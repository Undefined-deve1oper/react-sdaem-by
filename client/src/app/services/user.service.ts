import { UserType } from "../types/types";
import httpService from "./http.service";
import localStorageService from "./localStorage.service";

const userEndpoint = "user/";

const userService = {
    fetchAll: async () => {
        const { data } = await httpService.get(userEndpoint);
        return data;
    },
    getCurrentUser: async () => {
        const { data } = await httpService.get(
            userEndpoint + localStorageService.getUserId()
        );
        return data;
    },
    getUserById: async (id: string) => {
        const { data } = await httpService.get(userEndpoint + id);
        return data;
    },
    createUser: async (payload: UserType) => {
        const { data } = await httpService.put(
            userEndpoint + payload._id,
            payload
        );
        return data;
    },
    updateUserData: async (payload: UserType) => {
        const { data } = await httpService.patch(
            userEndpoint + localStorageService.getUserId(),
            payload
        );
        return data;
    },
    saveAvatarPhoto: async (payload: any) => {
        const { data } = await httpService.post(
            userEndpoint + localStorageService.getUserId() + "/upload_avatar",
            [...payload],
            {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }
        );

        return data;
    }
};

export default userService;
