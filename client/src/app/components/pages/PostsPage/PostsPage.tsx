import React from "react";
import { useStateSelector } from "../../../store";
import { PostsList, PostsSearchbar } from "../../ui/Posts";

const PostsPage: React.FC = () => {
    const posts = useStateSelector((state) => state.posts.entities);
    const postsLoading = useStateSelector((state) => state.posts.isLoading);

    return (
        <>
            <div className="posts__header posts-header">
                <h3 className="posts-header__title">Новости</h3>
                <PostsSearchbar />
            </div>
            <div className="posts__content">
                {!postsLoading ? (
                    <PostsList items={posts} />
                ) : (
                    <h1>Loading...</h1>
                )}
            </div>
        </>
    );
};

export default PostsPage;
