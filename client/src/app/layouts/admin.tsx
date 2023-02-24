import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../components/common/Breadcrumbs";
import SectionWrapper from "../components/common/SectionWrapper";
import Wrapper from "../components/common/Wrapper";
import AdminPage from "../components/pages/AdminPage";

const Admin = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <Wrapper hasTicketForm={false}>
            <SectionWrapper className="admin-page">
                <Breadcrumbs />
                <AdminPage />
            </SectionWrapper>
        </Wrapper>
    );
};

export default Admin;
