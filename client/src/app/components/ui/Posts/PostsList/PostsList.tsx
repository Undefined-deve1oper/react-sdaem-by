import React, { useEffect } from "react";
import { usePaginate } from "../../../../hooks/usePaginate";
import {
    loadPostsList,
    PostItem,
    PostRow,
    useAppDispatch
} from "../../../../store";
import Pagination from "../../../common/Pagination";
import PostCard from "../PostCard";

interface IPostsList {
    items: PostRow[];
    totalCount: number;
}

const PostsList: React.FC<IPostsList> = ({ items, totalCount, ...rest }) => {
    const { limit, page, handlePageChange } = usePaginate(3, 1);

    return (
        <>
            <ul className="posts__list posts-list">
                {items.map((item: any) => (
                    <li className="posts-list__item" key={item._id}>
                        <PostCard item={item} {...rest} />
                    </li>
                ))}
            </ul>
            <Pagination
                onPageChange={handlePageChange}
                itemsCount={totalCount}
                currentPage={page}
                pageSize={limit}
            />
        </>
    );
};

export default PostsList;
