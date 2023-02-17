import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { withRouter, withRedux } from "./components/ui/HOC";
import AppRouter from "./router/AppRouter";
import "./scss/app.scss";
import { loadPostsList } from "./store/slices/posts";

const App: React.FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadPostsList());
    }, []);

    return <AppRouter />;
};

const AppWithStoreAndRoutes = withRedux(withRouter(App));
export default AppWithStoreAndRoutes;
