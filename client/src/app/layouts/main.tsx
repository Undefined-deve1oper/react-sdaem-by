import React from "react";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";

const Main: React.FC = () => {
    return (
        <>
            <Header />
            <main className="page"></main>
            {/* <HomePage /> */}
            <Footer />
        </>
    );
};

export default Main;
