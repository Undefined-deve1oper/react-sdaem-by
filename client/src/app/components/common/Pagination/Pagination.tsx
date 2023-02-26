import React from "react";

interface IPagination {
    itemsCount: number;
    pageSize: number;
    currentPage: number;
    onPageChange: (pageIndex: number) => void;
}

const Pagination: React.FC<IPagination> = ({
    itemsCount,
    pageSize,
    currentPage,
    onPageChange
}) => {
    const pageCount = Math.ceil(itemsCount / pageSize);
    if (pageCount === 1) return null;
    const pages = Array.from({ length: pageCount }, (_, index) => index + 1);

    return (
        <ul className="pagination">
            {pages.map((page: number) => (
                <li
                    className={
                        "pagination__item " +
                        (page === currentPage ? "_active" : "")
                    }
                    key={"page_" + page}
                >
                    <span onClick={() => onPageChange(page)}>{page}</span>
                </li>
            ))}
        </ul>
    );
};

export default Pagination;
