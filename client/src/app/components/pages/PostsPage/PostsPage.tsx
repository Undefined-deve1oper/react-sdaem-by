import React from "react";
import { useStateSelector } from "../../../store";
import Error from "../../common/Error";
import { SkeletonPostsList } from "../../common/Skeletons/Posts";
import { PostsList, PostsSearchbar } from "../../ui/Posts";

const PostsPage: React.FC = () => {
    const posts = useStateSelector((state) => state.posts.entities);
    const postsLoading = useStateSelector((state) => state.posts.isLoading);
    const postsError = useStateSelector((state) => state.posts.error);

    return (
        <>
            <div className="posts__header posts-header">
                <h3 className="posts-header__title">Новости</h3>
                <PostsSearchbar />
            </div>
            <div className="posts__content">
                {!postsLoading ? (
                    <PostsList items={posts.rows} totalCount={posts.count} />
                ) : (
                    <SkeletonPostsList />
                )}
                {postsError && <Error message={postsError} />}
            </div>
        </>
    );
};

export default PostsPage;
