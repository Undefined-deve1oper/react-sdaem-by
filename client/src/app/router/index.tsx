import React from "react";
import { Navigate } from "react-router-dom";
import SignInPage from "../components/pages/SignInPage";
import SignUpPage from "../components/pages/SignUpPage";

const Login = React.lazy(() => import("../layouts/login"));
const Main = React.lazy(() => import("../layouts/main"));
const Posts = React.lazy(() => import("../layouts/posts"));

export type RoutesLinksType = {
    _id: number;
    item: string;
    path: string;
    icon?: string;
};

export type RoutesNavType = {
    path: string;
    element: string;
    submenu?: RoutesNavType[];
};

const routes = [
    { path: "/", breadcrumb: "Главная", element: <Main /> },
    { path: "posts", breadcrumb: "Новости", element: <Posts /> },
    {
        path: "accommodation-and-rates",
        breadcrumb: "Размещение и тарифы",
        element: <Posts />
    },
    {
        path: "ads-on-the-map",
        breadcrumb: "Объявления на карте",
        element: <Posts />
    },
    { path: "contacts", breadcrumb: "Контакты", element: <Posts /> },
    { path: "bookmarks", breadcrumb: "Закладки", element: <Posts /> },
    {
        path: "login",
        element: <Login />,
        children: [
            {
                path: "signup",
                breadcrumb: "Регистрация",
                element: <SignUpPage />
            },
            { path: "signin", breadcrumb: "Вход", element: <SignInPage /> },
            {
                path: "*",
                breadcrumb: "Не найдено",
                element: <Navigate to="/login/signup" />
            }
        ]
    },
    {
        path: "estates",
        breadcrumb: "Каталог",
        element: <Posts />
    },
    {
        path: "place-an-ad",
        breadcrumb: "Разместить объявления",
        element: <Posts />
    },
    { path: "*", breadcrumb: "Не найдено", element: <Navigate to="/" /> }
];

export default routes;
