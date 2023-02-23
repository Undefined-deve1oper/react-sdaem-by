import Breadcrumbs from "../components/common/Breadcrumbs";
import SectionWrapper from "../components/common/SectionWrapper";
import Wrapper from "../components/common/Wrapper";
import AdminPage from "../components/pages/AdminPage";

const Admin = () => {
    return (
        <Wrapper>
            <SectionWrapper className="admin-page">
                <Breadcrumbs />
                <AdminPage />
            </SectionWrapper>
        </Wrapper>
    );
};

export default Admin;
