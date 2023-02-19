import React from "react";
import { withRedux, withRouter } from "./components/ui/HOC";
import AppLoader from "./components/ui/HOC/appLoader/appLoader";
import AppRouter from "./router/AppRouter";
import "react-datepicker/dist/react-datepicker.css";
import "./scss/app.scss";

const App: React.FC = () => {
    return (
        <AppLoader>
            <AppRouter />
        </AppLoader>
    );
};

const AppWithStoreAndRoutes = withRedux(withRouter(App));
export default AppWithStoreAndRoutes;
