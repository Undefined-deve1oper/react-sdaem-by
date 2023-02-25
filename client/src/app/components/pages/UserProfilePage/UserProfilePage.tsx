import React from "react";
import { ProfileUserAds, ProfileUserCard } from "../../ui/Profile";

const UserProfilePage: React.FC = () => {
    return (
        <>
            <ProfileUserCard />
            <ProfileUserAds />
        </>
    );
};

export default UserProfilePage;
