import { useEffect, useMemo, useState } from "react";
import useDebounce from "./useDebounce";

export default function useSearch<T>(
    data: Array<T>,
    config: { searchBy: string }
) {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState(data || []);
    const [isSearching, setIsSearching] = useState(false);

    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        if (debouncedSearchTerm) {
            setIsSearching(true);

            const dataFiltered = () => {
                return data.filter((item: any) =>
                    item[config.searchBy]
                        .toString()
                        .toLowerCase()
                        .trim()
                        .includes(debouncedSearchTerm.toLowerCase().trim())
                );
            };

            setFilteredData(dataFiltered);
            setIsSearching(false);
        } else {
            setFilteredData(data);
            setIsSearching(false);
        }
    }, [data, debouncedSearchTerm]);

    return {
        filteredData,
        isSearching,
        searchTerm,
        setSearchTerm,
        handleChangeSearch
    };
}
