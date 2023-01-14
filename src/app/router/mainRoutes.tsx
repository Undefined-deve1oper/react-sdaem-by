import React from "react";
import { Navigate } from "react-router-dom";
import SignUpPage from "../components/pages/SignUpPage";
import SignInPage from "../components/pages/SignInPage";

const Login = React.lazy(() => import("../layouts/login"));
const Main = React.lazy(() => import("../layouts/main"));
const News = React.lazy(() => import("../layouts/news"));

export type RoutesLinksType = {
    path: string;
    title: string;
    submenu?: RoutesLinksType[];
};

export type RoutesNavType = {
    path: string;
    element: string;
    submenu?: RoutesNavType[];
};

const routes = [
    { path: "/", element: <Main /> },
    { path: "news", element: <News /> },
    {
        path: "accommodation-and-rates",
        element: <News />
    },
    {
        path: "ads-on-the-map",
        element: <News />
    },
    { path: "contacts", element: <News /> },
    { path: "bookmarks", element: <News /> },
    {
        path: "login",
        element: <Login />,
        children: [
            { path: "signup", element: <SignUpPage /> },
            { path: "signin", element: <SignInPage /> },
            { path: "*", element: <Navigate to="/login/signup" /> }
        ]
    },
    {
        path: "apartments-for-a-day/",
        element: <News />,
        children: [
            {
                path: "moscow",
                element: <News />
            },
            {
                path: "saint-petersburg",
                element: <News />
            },
            {
                path: "ekaterinburg",
                element: <News />
            },
            {
                path: "omsk",
                element: <News />
            },
            {
                path: "krasnoyarsk",
                element: <News />
            },
            {
                path: "voronezh",
                element: <News />
            },
            {
                path: "*",
                element: <Navigate to={"/apartments-for-a-day/"} />
            }
        ]
    },
    {
        path: "cottages-and-manor/",
        element: <News />
    },
    {
        path: "baths-and-saunas/",
        element: <News />
    },
    {
        path: "car-rental/",
        element: <News />
    },
    { path: "place-an-ad", element: <News /> },
    { path: "*", element: <Navigate to="/" /> }
];

export default routes;
