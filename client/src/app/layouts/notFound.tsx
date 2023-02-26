import React from "react";
import SectionWrapper from "../components/common/SectionWrapper";
import Wrapper from "../components/common/Wrapper";
import NotFoundPage from "../components/pages/NotFoundPage";

const notFound: React.FC = () => {
    return (
        <Wrapper hasTicketForm={false}>
            <SectionWrapper className="not-found">
                <NotFoundPage />
            </SectionWrapper>
        </Wrapper>
    );
};

export default notFound;
