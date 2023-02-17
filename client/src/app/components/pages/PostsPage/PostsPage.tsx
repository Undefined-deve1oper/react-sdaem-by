import React from "react";
import { useSelector } from "react-redux";
import { getPosts } from "../../../store/slices/posts";
import PostsSearchbar from "../../ui/PostsSearchbar";

const PostsPage: React.FC = () => {
    const posts = useSelector(getPosts());
    console.log(posts);

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
