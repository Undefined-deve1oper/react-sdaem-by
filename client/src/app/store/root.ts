import { configureStore, combineReducers } from "@reduxjs/toolkit";
import postsReducer from "./slices/posts";
import usersReducer from "./slices/users";

const rootReducer = combineReducers({
    posts: postsReducer,
    users: usersReducer
});

export const store = configureStore({
    reducer: rootReducer
});
