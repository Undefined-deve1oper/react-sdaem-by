import { configureStore, combineReducers } from "@reduxjs/toolkit";
import postsReducer from "./slices/posts";
import usersReducer from "./slices/users";
import estatesReducer from "./slices/estates";

const rootReducer = combineReducers({
    posts: postsReducer,
    users: usersReducer,
    estates: estatesReducer
});

export const store = configureStore({
    reducer: rootReducer
});
