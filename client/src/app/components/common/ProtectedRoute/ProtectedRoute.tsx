import React from "react";
import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import {
    getCurrentUserData,
    getIsLoggedIn,
    getUsersLoadingStatus,
    useStateSelector
} from "../../../store";

type ProtectedRouteProps = {
    children: any;
    isAdmin?: boolean;
    to?: string;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
    children,
    isAdmin,
    to = "/login/signin",
    ...rest
}) => {
    const isLoading = useStateSelector(getUsersLoadingStatus());
    const isLoggedIn = useStateSelector(getIsLoggedIn());
    const location = useLocation();
    const currentUser = useStateSelector(getCurrentUserData());

    if (!isLoading) {
        if (isLoggedIn) {
            if (isAdmin) {
                if (currentUser?.role === "ADMIN") {
                    return children;
                }
            } else {
                return children;
            }
        }
        return <Navigate to={to} state={{ from: location }} />;
    }
};

export default ProtectedRoute;
