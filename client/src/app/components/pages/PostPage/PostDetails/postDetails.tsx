import React from "react";
import { useParams } from "react-router-dom";
import { getPostById, PostItem, useStateSelector } from "../../../../store";
import { getFormatDate } from "../../../../utils/dateHelpers";
import ShareButtons from "../../../ui/ShareButtons";

const PostDetails = () => {
    const { postId } = useParams();
    const post = useStateSelector<PostItem>(getPostById(postId));

    if (!post) return <h1>Loading...</h1>;

    return (
        <div className="post-details">
            <h1 className="post-details__title">{post.title}</h1>
            <div className="post-details__share">
                <div className="post-details__date">
                    {getFormatDate(post.createdAt)}
                </div>
                <ShareButtons
                    url={
                        "https://github.com/Undefined-deve1oper/react-sdaem-by/tree/develop"
                    }
                    title={post.title}
                    image={post.image}
                />
            </div>
            <div className="post-details__content">
                <div className="post-details__image _ibg">
                    <img src={post.image} alt="Картинка" />
                </div>
                <div className="post-details__text">
                    <p>{post.fullText}</p>
                </div>
            </div>
        </div>
    );
};

export default React.memo(PostDetails);
