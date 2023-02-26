import React from "react";
import { Outlet } from "react-router-dom";
import Breadcrumbs from "../components/common/Breadcrumbs";

const Login: React.FC = () => {
    return (
        <main className="login-page">
            {/* <Breadcrumbs /> */}
            <div className="login-page__container _container">
                <Outlet />
            </div>
        </main>
    );
};

export default Login;
