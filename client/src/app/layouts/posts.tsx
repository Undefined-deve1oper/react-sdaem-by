import React from "react";
import { Outlet } from "react-router-dom";
import Wrapper from "../components/common/Wrapper";

const Posts: React.FC = () => {
    return (
        <Wrapper>
            <Outlet />
        </Wrapper>
    );
};

export default Posts;
