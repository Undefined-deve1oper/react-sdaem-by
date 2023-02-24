import React from "react";
import { usePaginate, useSort } from "../../../../hooks";
import { CommentType } from "../../../../types/types";
import Pagination from "../../../common/Pagination";
import EstateComment from "../EstateComment";

interface IList {
    onAnswer: (userId: string) => void;
    comments: CommentType[];
}

const EstateCommentsList: React.FC<IList> = ({ comments, onAnswer }) => {
    const pageSize = 3;
    const { sortedItems } = useSort(comments, {
        path: "createdAt",
        order: "desc"
    });
    const { itemsListCrop, handlePageChange, page } = usePaginate(
        sortedItems || [],
        pageSize,
        1
    );
    const itemsCount = comments?.length;

    return (
        <div className="estate-comments__reviews">
            {comments.length > 0 ? (
                <ul className="estate-comments__list">
                    <h3 className="estate-comments__title">Комментарии</h3>
                    {itemsListCrop.map((item) => (
                        <li className="estate-comments__item" key={item._id}>
                            <EstateComment comment={item} onAnswer={onAnswer} />
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="estate-comments__warning">Список отзывов пуст</p>
            )}
            {itemsCount > pageSize && (
                <Pagination
                    currentPage={page}
                    onPageChange={handlePageChange}
                    itemsCount={comments.length}
                    pageSize={pageSize}
                />
            )}
        </div>
    );
};

export default EstateCommentsList;
