import React from "react";
import { useSelector } from "react-redux";
import { usePaginate, useSearch, useSort } from "../../../hooks";
import { getPostsList, getPostsLoadingStatus } from "../../../store";
import Breadcrumbs from "../../common/Breadcrumbs";
import Pagination from "../../common/Pagination";
import Searchbar from "../../common/Searchbar";
import SectionWrapper from "../../common/SectionWrapper";
import { SkeletonPostsList } from "../../common/Skeletons/Posts";
import { PostsList } from "../../ui/Posts";

const options = [
    { name: "6", value: 6 },
    { name: "12", value: 12 },
    { name: "18", value: 18 },
    { name: "24", value: 24 }
];

const PostsPage: React.FC = () => {
    const posts = useSelector(getPostsList());
    const postsLoading = useSelector(getPostsLoadingStatus());

    const { filteredData, searchTerm, handleChangeSearch } = useSearch(posts, {
        searchBy: "title"
    });
    const { sortedItems } = useSort(filteredData || [], {
        path: "title",
        order: "desc"
    });
    const {
        itemsListCrop: postsListCrop,
        limit,
        page,
        handlePageChange
    } = usePaginate(sortedItems || [], options[0].value, 1);

    return (
        <SectionWrapper className="posts">
            <Breadcrumbs />
            <div className="posts__header posts-header">
                <h3 className="posts-header__title">Новости</h3>
                <div className="posts-header__form">
                    <Searchbar
                        value={searchTerm}
                        onChange={handleChangeSearch}
                        label="Поиск по статьям..."
                    />
                </div>
            </div>
            <div className="posts__content">
                {!postsLoading ? (
                    <PostsList items={postsListCrop} />
                ) : (
                    <SkeletonPostsList />
                )}
                {sortedItems.length > limit && (
                    <Pagination
                        onPageChange={handlePageChange}
                        itemsCount={sortedItems.length}
                        currentPage={page}
                        pageSize={limit}
                    />
                )}
                {postsListCrop.length === 0 && (
                    <h2 className="feedback">К сожалению, постов нет.</h2>
                )}
            </div>
        </SectionWrapper>
    );
};

export default PostsPage;
