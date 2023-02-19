import axios from "axios";
import config from "../config.json";
import { SignInDataType, UserType } from "./../types/types";
import localStorageService from "./localStorage.service";

const httpAuth = axios.create({
    baseURL: `${config.apiEndPoint}/auth/`
});

const authService = {
    signIn: async ({ email, password }: SignInDataType) => {
        const { data } = await httpAuth.post(`signIn`, {
            email,
            password,
            returnSecureToken: true
        });
        return data;
    },
    signUp: async (payload: UserType) => {
        const { data } = await httpAuth.post(`signUp`, payload);
        return data;
    },
    refresh: async () => {
        const { data } = await httpAuth.post("token", {
            grant_type: "refresh_token",
            refresh_token: localStorageService.getRefreshToken()
        });
        return data;
    }
};

export default authService;
