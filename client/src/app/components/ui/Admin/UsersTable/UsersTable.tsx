import React from "react";
import { NavLink } from "react-router-dom";
import { useSort } from "../../../../hooks";
import { useAppDispatch, useStateSelector } from "../../../../store";
import { getUserBookingCount } from "../../../../store/slices/booking";
import {
    deleteUser,
    getCurrentUserData,
    getCurrentUserId,
    getUsersList
} from "../../../../store/slices/users";
import { UserType } from "../../../../types/types";
import { getFormatDate } from "../../../../utils/dateHelpers";
import Button from "../../../common/Button";
import Table from "../../../common/Table";

const UsersTable: React.FC = () => {
    const dispatch = useAppDispatch();
    const users = useStateSelector(getUsersList());
    const currentUserId = useStateSelector(getCurrentUserId());
    const { sortBy, setSortBy, sortedItems } = useSort(users, {
        path: "name",
        order: "desc"
    });

    if (users) {
        const columns: any = {
            name: {
                name: "Имя",
                path: "name",
                component: (user: UserType) => (
                    <NavLink to={`/users/${user._id}`}>{user.name}</NavLink>
                )
            },
            email: {
                name: "Email",
                path: "email"
            },
            role: {
                name: "Роль",
                path: "role",
                component: (user: UserType) => (
                    <>
                        {user.role === "ADMIN" ? "Администратор" : "Посетитель"}
                    </>
                )
            },
            productsCount: {
                name: "Товаров забронированно",
                component: (user: UserType) => {
                    return `${dispatch(getUserBookingCount(user._id))}`;
                }
            },
            createdAt: {
                name: "Аккаунт создан:",
                component: (user: UserType) => (
                    <span>{getFormatDate(user.createdAt)}</span>
                )
            },
            delete: {
                component: (user: UserType) => (
                    <>
                        {user._id !== currentUserId && (
                            <Button
                                onClick={() => dispatch(deleteUser(user._id))}
                            >
                                Удалить
                            </Button>
                        )}
                    </>
                )
            }
        };

        if (sortedItems) {
            return (
                <Table
                    selectedSort={sortBy}
                    columns={columns}
                    data={sortedItems}
                    onSort={setSortBy}
                />
            );
        }
    }
    return <h1>Пользователей пока нет</h1>;
};

export default UsersTable;
