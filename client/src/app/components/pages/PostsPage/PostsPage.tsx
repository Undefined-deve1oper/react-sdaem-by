import React from "react";
import { usePaginate } from "../../../hooks";
import { useStateSelector } from "../../../store";
import Error from "../../common/Error";
import Pagination from "../../common/Pagination";
import { SkeletonPostsList } from "../../common/Skeletons/Posts";
import { PostsList, PostsSearchbar } from "../../ui/Posts";

const PostsPage: React.FC = () => {
    const posts = useStateSelector((state) => state.posts.entities);
    const postsLoading = useStateSelector((state) => state.posts.isLoading);
    const postsError = useStateSelector((state) => state.posts.error);
    const { handlePageChange, postsTotalCount, currentPage, perPage } =
        usePaginate();

    return (
        <>
            <div className="posts__header posts-header">
                <h3 className="posts-header__title">Новости</h3>
                <PostsSearchbar />
            </div>
            <div className="posts__content">
                {!postsLoading ? (
                    <>
                        <PostsList items={posts} />
                        <Pagination
                            onPageChange={handlePageChange}
                            itemsCount={postsTotalCount}
                            currentPage={currentPage}
                            pageSize={perPage}
                        />
                    </>
                ) : (
                    <SkeletonPostsList />
                )}
                {posts.length === 0 && <h2>К сожалению, постов нет.</h2>}
                {postsError && <Error message={postsError} />}
            </div>
        </>
    );
};

export default PostsPage;
