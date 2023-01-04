import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import HomePage from "../components/pages/HomePage";

const Main: React.FC = () => {
    return (
        <>
            <Header />
            <HomePage />
            <Footer />
        </>
    );
};

export default Main;
