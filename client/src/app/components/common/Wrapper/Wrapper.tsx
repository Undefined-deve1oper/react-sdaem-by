import React from "react";
import Footer from "../Footer";
import Header from "../Header";

interface IWrapper {
    children: React.ReactChild | React.ReactNode;
}

const Wrapper: React.FC<IWrapper> = ({ children }) => {
    return (
        <>
            <Header />
            <main className="page">{children}</main>
            <Footer />
        </>
    );
};

export default Wrapper;
