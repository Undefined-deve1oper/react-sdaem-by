import { configureStore, combineReducers } from "@reduxjs/toolkit";
import postsReducer from "./slices/posts";

const rootReducer = combineReducers({
    posts: postsReducer
});

function createStore() {
    return configureStore({ reducer: rootReducer });
}

export default createStore;
