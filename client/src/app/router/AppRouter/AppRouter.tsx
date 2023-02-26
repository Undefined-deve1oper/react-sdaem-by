import React, { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import Loader from "../../components/common/Loader";
import routes from "../index";

const AppRouter = () => {
    const elements = useRoutes(routes);

    return <Suspense fallback={<Loader visible={true} />}>{elements}</Suspense>;
};

export default AppRouter;
