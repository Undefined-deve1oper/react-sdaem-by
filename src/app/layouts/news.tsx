import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import { Outlet } from "react-router-dom";

const News: React.FC = () => {
    return (
        <>
            {/* <Header /> */}
            <main className="page"></main>
            <Outlet />
            {/* <Footer/> */}
        </>
    );
};

export default News;
