import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer } from "react-toastify";
import "swiper/css";
import "swiper/css/pagination";
import { withRedux, withRouter } from "./components/ui/HOC";
import AppLoader from "./components/ui/HOC/appLoader/appLoader";
import AppRouter from "./router/AppRouter";
import "./scss/app.scss";

const App: React.FC = () => {
    return (
        <AppLoader>
            <AppRouter />
            <ToastContainer />
        </AppLoader>
    );
};

const AppWithStoreAndRoutes = withRedux(withRouter(App));
export default AppWithStoreAndRoutes;
