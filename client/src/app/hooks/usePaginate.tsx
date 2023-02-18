import { useEffect } from "react";
import {
    changeCurrentPage,
    loadPostsList,
    useAppDispatch,
    useStateSelector
} from "../store";

const usePaginate = () => {
    const postsTotalCount = useStateSelector((state) => state.posts.totalCount);
    const currentPage = useStateSelector((state) => state.posts.currentPage);
    const perPage = useStateSelector((state) => state.posts.perPage);
    const dispatch = useAppDispatch();

    const handlePageChange = (pageIndex: number) => {
        dispatch(changeCurrentPage(pageIndex));
    };

    useEffect(() => {
        dispatch(loadPostsList(perPage, currentPage));
    }, [currentPage]);

    return {
        handlePageChange,
        postsTotalCount,
        currentPage,
        perPage
    };
};

export default usePaginate;
