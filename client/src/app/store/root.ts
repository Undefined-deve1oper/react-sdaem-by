import { configureStore, combineReducers } from "@reduxjs/toolkit";
import postsReducer from "./slices/posts";
import usersReducer from "./slices/users";
import estatesReducer from "./slices/estates";
import bookingReducer from "./slices/booking";
import ticketsReducer from "./slices/tickets";

const rootReducer = combineReducers({
    posts: postsReducer,
    users: usersReducer,
    estates: estatesReducer,
    booking: bookingReducer,
    tickets: ticketsReducer
});

export const store = configureStore({
    reducer: rootReducer
});
