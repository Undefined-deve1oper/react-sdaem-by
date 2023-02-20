import React from "react";
import { Outlet } from "react-router-dom";
import Breadcrumbs from "../components/common/Breadcrumbs";
import SectionWrapper from "../components/common/SectionWrapper";
import Wrapper from "../components/common/Wrapper";
import { ProfileHeader } from "../components/ui/Profile";

const UserProfile: React.FC = () => {
    return (
        <Wrapper>
            <ProfileHeader />
            <SectionWrapper className="user-profile">
                <Breadcrumbs />
                <Outlet />
            </SectionWrapper>
        </Wrapper>
    );
};

export default UserProfile;
