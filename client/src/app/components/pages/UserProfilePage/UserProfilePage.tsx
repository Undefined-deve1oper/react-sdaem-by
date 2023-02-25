import React from "react";
import { useParams } from "react-router-dom";
import { ProfileUserAds, ProfileUserCard } from "../../ui/Profile";

const UserProfilePage = () => {
    const { userId } = useParams<{ userId: string }>();

    return (
        <>
            <ProfileUserCard userId={userId!} />
            <ProfileUserAds />
        </>
    );
};

export default UserProfilePage;
