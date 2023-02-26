import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getPostById, PostItem, useStateSelector } from "../../../../store";
import { getFormatDate } from "../../../../utils/dateHelpers";
import SkeletonPostDetail from "../../../common/Skeletons/Posts/SkeletonPostDetail";
import ShareButtons from "../../../ui/ShareButtons";

const PostDetails = () => {
    const { postId } = useParams();
    const { pathname } = useLocation();
    const post = useStateSelector<PostItem>(getPostById(postId));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    if (!post) {
        return (
            <div className="post-details">
                <SkeletonPostDetail />
            </div>
        );
    }

    return (
        <div className="post-details">
            {/* <SkeletonPostDetail /> */}
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
