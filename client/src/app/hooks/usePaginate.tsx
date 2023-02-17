import { useState } from "react";

export const usePaginate = (initLimit: number, initPage: number) => {
    const [limit, setLimit] = useState<number>(initLimit);
    const [page, setPage] = useState<number>(initPage);

    const handlePageChange = (pageIndex: number) => {
        setPage(pageIndex);
    };

    const handleLimitChange = (size: number) => {
        setLimit(size);
        setPage(1);
    };

    return {
        page,
        limit,
        handlePageChange,
        handleLimitChange
    };
};
