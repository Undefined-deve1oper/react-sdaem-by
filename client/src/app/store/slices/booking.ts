import { createSlice, Dispatch } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import bookingService from "../../services/booking.service";
import { BookingType } from "../../types/types";
import { RootStore } from "../types";

interface bookingState {
    entities: BookingType[];
    isLoading: boolean;
    error: string | null;
    bookingLoading: boolean;
}

const initialState: bookingState = {
    entities: [],
    isLoading: true,
    error: null,
    bookingLoading: false
};

const bookingSlice = createSlice({
    name: "booking",
    initialState,
    reducers: {
        requested(state) {
            state.isLoading = true;
        },
        received(state, action) {
            state.entities = action.payload;
            state.isLoading = false;
        },
        requestFailed(state, action) {
            state.error = action.payload;
            state.isLoading = false;
        },
        bookingRequested(state) {
            state.bookingLoading = true;
        },
        created(state, action) {
            state.bookingLoading = false;
            if (!Array.isArray(state.entities)) {
                state.entities = [];
            }
            state.entities.push(action.payload);
        },
        requetFailed(state, action) {
            state.error = action.payload;
        },
        removed(state, action) {
            state.entities = state.entities.filter(
                (item) => item._id !== action.payload
            );
        }
    }
});

const { reducer: bookingReducer, actions } = bookingSlice;
const {
    requested,
    received,
    created,
    bookingRequested,
    removed,
    requestFailed
} = actions;

export const loadBooking = () => async (dispatch: Dispatch) => {
    dispatch(requested());
    try {
        const { content } = await bookingService.fetchAll();
        dispatch(received(content));
    } catch (error) {
        dispatch(requestFailed(error.message));
    }
};
export const deleteUserBooking = (id: string) => async (dispatch: Dispatch) => {
    try {
        await bookingService.delete(id);
        toast.info(`Бронь номера успешно снята`);
        dispatch(removed(id));
    } catch (error) {
        dispatch(requestFailed(error.message));
    }
};
export const getUserBooking = (userId: string) => (state: RootStore) => {
    return state.booking.entities.filter(
        (booking) => booking.userId.toString() === userId
    );
};
export const getBookingLoading = () => (state: RootStore) =>
    state.booking.isLoading;
export const getRoomBookingList = (estateId: string) => (state: RootStore) => {
    return state.booking.entities.filter(
        (booking) => booking.estateId === estateId
    );
};
export const getBookingList = () => (state: RootStore) => {
    return state.booking.entities;
};
export const getBookingError = () => (state: RootStore) => {
    return state.booking.error;
};

export const reserveEstate =
    (bookingEstate: BookingType) => async (dispatch: Dispatch) => {
        dispatch(bookingRequested());
        try {
            const { content } = await bookingService.create(bookingEstate);
            dispatch(created(content));
        } catch (error) {
            const { message } = error.response.data.error;
            dispatch(requestFailed(message));
        }
    };
export const getUserBookingCount =
    (userId: string) => (dispatch: Dispatch, getState: any) => {
        return getState().booking.entities.filter(
            (booking: any) => booking.userId.toString() === userId
        )?.length;
    };
export const getBookingById =
    ({ _id: userId }: { _id: string }) =>
    (state: RootStore) => {
        const usersEstate = state.booking.entities.filter(
            (room) => room.userId === userId
        );

        return !state.booking.bookingLoading
            ? usersEstate[usersEstate.length - 1]
            : null;
    };

export default bookingReducer;
