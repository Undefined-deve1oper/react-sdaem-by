import React, { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import routes from "../index";

const AppRouter = () => {
    const elements = useRoutes(routes);

    return <Suspense fallback={<h1>Loading...</h1>}>{elements}</Suspense>;
};

export default AppRouter;
