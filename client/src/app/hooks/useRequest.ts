import { useEffect, useState } from "react";
import { IListDropdown } from "../components/common/Dropdown/DropdownList/DropdownList";
import httpService from "../services/http.service";
import { IHeaderNavData } from "../types/interfaces";

export function useRequest<T>(apiUrl: string) {
    const [data, setData] = useState<IListDropdown[] & IHeaderNavData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        const requestHandler = async () => {
            try {
                const { data } = await httpService.get(apiUrl);
                setLoading(false);
                setData(data.content);
            } catch (error) {
                setLoading(false);
                setError(true);
            }
        };
        requestHandler();
    }, [apiUrl]);

    return {
        data,
        loading,
        error
    };
}
