import { configureStore, combineReducers } from "@reduxjs/toolkit";
import postsReducer from "./slices/posts";
import usersReducer from "./slices/users";
import estatesReducer from "./slices/estates";
import bookingReducer from "./slices/booking";
import ticketsReducer from "./slices/tickets";
import commentsReducer from "./slices/comments";

const rootReducer = combineReducers({
    posts: postsReducer,
    users: usersReducer,
    estates: estatesReducer,
    booking: bookingReducer,
    tickets: ticketsReducer,
    comments: commentsReducer
});

export const store = configureStore({
    reducer: rootReducer
});
