import omit from "lodash.omit";
import queryString from "query-string";
import { useCallback, useMemo } from "react";
import { useLocation, useNavigate } from "react-router";

const useFiltersQuery = () => {
    const navigate = useNavigate();
    const { search } = useLocation();

    const searchFilters = useMemo(
        () =>
            queryString.parse(search, {
                parseNumbers: true,
                parseBooleans: true
            }),
        [search]
    );

    const setSearchQuery = useCallback(
        (filter: any) => {
            const search = queryString.stringify(filter);
            navigate(search, { replace: true });
        },
        [navigate]
    );

    const clearFilter = useCallback(
        ({ target }: any) => {
            const { name } = target;
            const newFilter = omit(searchFilters, name);

            setSearchQuery(newFilter);
        },
        [searchFilters, setSearchQuery]
    );

    const handleChangeFilter = useCallback(
        ({ target }: any) => {
            const { name, value } = target;

            if (value === false || value === 0) {
                const newFilter = { ...searchFilters, [name]: value };
                setSearchQuery(newFilter);

                return clearFilter({ target });
            }
            const newFilter = { ...searchFilters, [name]: value };
            return setSearchQuery(newFilter);
        },

        [searchFilters, setSearchQuery, clearFilter]
    );
    const handleResetSearchFilters = useCallback(() => {
        navigate("", { replace: true });
    }, [navigate]);

    return { searchFilters, handleChangeFilter, handleResetSearchFilters };
};

export default useFiltersQuery;
