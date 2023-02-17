import React from "react";
import PostsSearchbar from "../../ui/PostsSearchbar";

const PostsPage: React.FC = () => {
    return (
        <>
            <div className="posts__header posts-header">
                <h3 className="posts-header__title">Новости</h3>
                <PostsSearchbar />
            </div>
        </>
    );
};

export default PostsPage;
