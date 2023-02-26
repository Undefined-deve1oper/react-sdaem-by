import React from "react";
import Breadcrumbs from "../../common/Breadcrumbs";
import SectionWrapper from "../../common/SectionWrapper";
import { EstateBooking } from "../../ui/Estates";
import EstateComments from "../../ui/Estates/EstateComments";
import EstateDetail from "./EstateDetail";

const EstatePage: React.FC = () => {
    return (
        <SectionWrapper className="estate-page">
            <Breadcrumbs />
            <EstateDetail />
            <EstateBooking />
            <EstateComments />
        </SectionWrapper>
    );
};

export default EstatePage;
