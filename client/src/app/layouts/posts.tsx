import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import PostsPage from "../components/pages/PostsPage";
import Breadcrumbs from "../components/common/Breadcrumbs";
import Wrapper from "../components/common/Wrapper";
import SectionWrapper from "../components/common/SectionWrapper";

const Posts: React.FC = () => {
    return (
        <Wrapper>
            <SectionWrapper className="posts">
                <Breadcrumbs />
                <PostsPage />
            </SectionWrapper>
        </Wrapper>
    );
};

export default Posts;
