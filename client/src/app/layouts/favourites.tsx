import React from "react";
import Breadcrumbs from "../components/common/Breadcrumbs";
import SectionWrapper from "../components/common/SectionWrapper";
import Wrapper from "../components/common/Wrapper";
import FavouritesPage from "../components/pages/FavouritesPage";

const Favourite: React.FC = () => {
    return (
        <Wrapper>
            <SectionWrapper className="favourites-page">
                <Breadcrumbs />
                <FavouritesPage />
            </SectionWrapper>
        </Wrapper>
    );
};

export default Favourite;
