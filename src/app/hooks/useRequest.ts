import { useEffect, useState } from "react";
import { IHeaderNavData } from "../components/common/Header/Header";
import httpService from "../services/http.service";

export const useRequest = (apiUrl: string) => {
    const [data, setData] = useState<IHeaderNavData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        const requestHandler = async () => {
            try {
                const { data } = await httpService.get(apiUrl);
                setLoading(false);
                setData(data.content);
            } catch (error) {
                setLoading(false);
                setError(error.message);
            }
        };
        requestHandler();
    }, [apiUrl]);

    return {
        data,
        loading,
        error
    };
};