import React from "react";
import Breadcrumbs from "../../common/Breadcrumbs";
import SectionWrapper from "../../common/SectionWrapper";
import EstateDetail from "./EstateDetail";

const EstatePage: React.FC = () => {
    return (
        <SectionWrapper className="estate-page">
            <Breadcrumbs />
            <EstateDetail />
        </SectionWrapper>
    );
};

export default EstatePage;
