import React from "react";
import Breadcrumbs from "../../common/Breadcrumbs";
import SectionWrapper from "../../common/SectionWrapper";
import PostDetails from "./PostDetails";
import PostReadMore from "./PostReadMore";

const PostPage: React.FC = () => {
    return (
        <>
            <SectionWrapper className="posts-page">
                <Breadcrumbs />
                <PostDetails />
            </SectionWrapper>
            <PostReadMore />
        </>
    );
};

export default PostPage;
