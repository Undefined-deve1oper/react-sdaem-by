import React from "react";
import { Outlet } from "react-router-dom";

const Estates: React.FC = () => {
    return (
        <div>
            <h1>Estates</h1>
            <Outlet />
        </div>
    );
};

export default Estates;
