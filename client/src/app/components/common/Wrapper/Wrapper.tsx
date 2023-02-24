import React from "react";
import Feedback from "../../pages/HomePage/Feedback";
import Footer from "../Footer";
import Header from "../Header";

interface IWrapper {
    children: React.ReactChild | React.ReactNode;
    hasTicketForm?: boolean;
}

const Wrapper: React.FC<IWrapper> = ({ children, hasTicketForm = true }) => {
    return (
        <>
            <Header />
            <main className="page">
                {children}
                {hasTicketForm && <Feedback />}
            </main>
            <Footer />
        </>
    );
};

export default Wrapper;
