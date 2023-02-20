import React from "react";
import { Navigate } from "react-router-dom";
import {
    DynamicPostsBreadcrumb,
    UserBreadcrumb
} from "../components/common/Breadcrumbs";
import ProtectedRoute from "../components/common/ProtectedRoute";
import PostPage from "../components/pages/PostPage";
import PostsPage from "../components/pages/PostsPage";
import SignInPage from "../components/pages/SignInPage";
import SignUpPage from "../components/pages/SignUpPage";
import UserProfilePage from "../components/pages/UserProfilePage";

const Login = React.lazy(() => import("../layouts/login"));
const Main = React.lazy(() => import("../layouts/main"));
const Posts = React.lazy(() => import("../layouts/posts"));
const Bookmark = React.lazy(() => import("../layouts/bookmark"));
const UserProfile = React.lazy(() => import("../layouts/userProfile"));

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
    {
        path: "posts",
        breadcrumb: "Новости",
        element: <Posts />,
        children: [
            {
                path: "",
                breadcrumb: "Новости",
                element: <PostsPage />
            },
            {
                path: ":postId",
                breadcrumb: DynamicPostsBreadcrumb,
                element: <PostPage />
            }
        ]
    },
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
    { path: "bookmark", breadcrumb: "Закладки", element: <Bookmark /> },
    {
        path: "login",
        element: <Login />,
        children: [
            { path: "", element: <Navigate to="/login/signin" /> },
            {
                path: "signup",
                breadcrumb: "Регистрация",
                element: <SignUpPage />
            },
            { path: "signin", breadcrumb: "Вход", element: <SignInPage /> }
        ]
    },
    {
        path: "estates",
        breadcrumb: "Каталог",
        element: <Posts />
    },
    {
        path: "users",
        breadcrumb: "Пользователи",
        element: <UserProfile />,
        children: [
            { path: "", element: <Navigate to="/estates" /> },
            {
                path: ":userId",
                breadcrumb: UserBreadcrumb,
                element: (
                    <ProtectedRoute>
                        <UserProfilePage />
                    </ProtectedRoute>
                )
            }
        ]
    },
    {
        path: "place-an-ad",
        breadcrumb: "Разместить объявления",
        element: <Posts />
    },
    { path: "*", breadcrumb: "Не найдено", element: <Navigate to="/" /> }
];

export default routes;
