import React from "react";
import { Navigate } from "react-router-dom";
import {
    PostsBreadcrumb,
    UserBreadcrumb
} from "../components/common/Breadcrumbs";
import { EstatesBreadcrumb } from "../components/common/Breadcrumbs/Breadcrumbs";
import ProtectedRoute from "../components/common/ProtectedRoute";

const Login = React.lazy(() => import("../layouts/login"));
const Main = React.lazy(() => import("../layouts/main"));
const Posts = React.lazy(() => import("../layouts/posts"));
const Estates = React.lazy(() => import("../layouts/estates"));
const Bookmark = React.lazy(() => import("../layouts/bookmark"));
const UserProfile = React.lazy(() => import("../layouts/userProfile"));
const UserBooking = React.lazy(() => import("../layouts/UserBooking"));
const UserEditPage = React.lazy(
    () => import("../components/pages/UserEditPage")
);
const UserProfilePage = React.lazy(
    () => import("../components/pages/UserProfilePage")
);
const EstatesPage = React.lazy(() => import("../components/pages/EstatesPage"));
const EstatePage = React.lazy(() => import("../components/pages/EstatePage"));
const PostPage = React.lazy(() => import("../components/pages/PostPage"));
const PostsPage = React.lazy(() => import("../components/pages/PostsPage"));
const SignInPage = React.lazy(() => import("../components/pages/SignInPage"));
const SignUpPage = React.lazy(() => import("../components/pages/SignUpPage"));

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
                breadcrumb: PostsBreadcrumb,
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
        element: <Estates />,
        children: [
            {
                path: "",
                breadcrumb: EstatesBreadcrumb,
                element: <EstatesPage />
            },
            {
                path: ":estateId",
                // breadcrumb: EstateDetailBreadcrumb,
                element: <EstatePage />
            }
        ]
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
            },
            {
                path: ":userId/edit",
                breadcrumb: "Редактировать",
                element: (
                    <ProtectedRoute>
                        <UserEditPage />
                    </ProtectedRoute>
                )
            },
            {
                path: ":userId/booking",
                breadcrumb: "Мои бронирования",
                element: (
                    <ProtectedRoute>
                        <UserBooking />
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
