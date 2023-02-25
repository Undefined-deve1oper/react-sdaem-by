import React from "react";
import { Navigate } from "react-router-dom";
import {
    PostsBreadcrumb,
    UserBreadcrumb
} from "../components/common/Breadcrumbs";
import { EstatesBreadcrumb } from "../components/common/Breadcrumbs/Breadcrumbs";
import ProtectedRoute from "../components/common/ProtectedRoute";

const NotFound = React.lazy(() => import("../layouts/notFound"));
const Login = React.lazy(() => import("../layouts/login"));
const Main = React.lazy(() => import("../layouts/main"));
const Posts = React.lazy(() => import("../layouts/posts"));
const Admin = React.lazy(() => import("../layouts/admin"));
const Estates = React.lazy(() => import("../layouts/estates"));
const Favourites = React.lazy(() => import("../layouts/favourites"));
const UserProfile = React.lazy(() => import("../layouts/userProfile"));
const UserBooking = React.lazy(() => import("../layouts/userBooking"));
const UserEditPage = React.lazy(
    () => import("../components/pages/UserEditPage")
);
const UserProfilePage = React.lazy(
    () => import("../components/pages/UserProfilePage")
);
const EstateEditPage = React.lazy(
    () => import("../components/pages/EstateEditPage")
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
        element: <NotFound />
    },
    { path: "contacts", breadcrumb: "Контакты", element: <NotFound /> },
    { path: "favourites", breadcrumb: "Закладки", element: <Favourites /> },
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
            },
            {
                path: ":estateId/edit",
                // breadcrumb: EstateDetailBreadcrumb,
                element: (
                    <ProtectedRoute>
                        <EstateEditPage />
                    </ProtectedRoute>
                )
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
        path: "admin",
        breadcrumb: "Панель администратора",
        element: (
            <ProtectedRoute isAdmin={true} to="/estates">
                <Admin />
            </ProtectedRoute>
        )
    },
    {
        path: "place-an-ad",
        breadcrumb: "Разместить объявления",
        element: <NotFound />
    },
    { path: "*", breadcrumb: "Не найдено", element: <Navigate to="/" /> }
];

export default routes;
