import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { getPostById, PostItem, useStateSelector } from "../../../../store";
import { PostsList } from "../../../ui/Posts";

const PostReadMore: React.FC = () => {
    const { postId } = useParams();
    const post = useStateSelector<PostItem>(getPostById(postId));
    const posts = useStateSelector<PostItem[]>((state) => state.posts.entities);

    const postsList = useMemo(() => {
        return posts
            .filter((post: PostItem) => post._id !== postId)
            .slice(0, 3);
    }, [postId, post]);

    return (
        <div className="read-more">
            <div className="read-more__container _container">
                <h3 className="read-more__title">Читайте также</h3>
                <PostsList items={postsList} />
            </div>
        </div>
    );
};

export default PostReadMore;
