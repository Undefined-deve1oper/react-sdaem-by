import React from "react";
import { Outlet } from "react-router-dom";
import Wrapper from "../components/common/Wrapper";

const Estates: React.FC = () => {
    return (
        <Wrapper>
            <section className="estates">
                <Outlet />
            </section>
        </Wrapper>
    );
};

export default Estates;
