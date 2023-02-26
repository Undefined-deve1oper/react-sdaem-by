import { createSlice, Dispatch } from "@reduxjs/toolkit";
import ticketService from "../../services/ticket.service";
import { RootStore } from "../types";

type ticketState = {
    entities: any[];
    isLoading: boolean;
    error: string | null;
};

const initialState: ticketState = {
    entities: [],
    isLoading: true,
    error: null
};

const ticketsSlice = createSlice({
    name: "tickets",
    initialState,
    reducers: {
        ticketRequested(state) {
            state.isLoading = true;
        },
        ticketReceived(state, action) {
            state.entities = action.payload;
            state.isLoading = false;
        },
        ticketRequestFailed(state, action) {
            state.error = action.payload;
        },
        confirmed(state, action) {
            const elementIndex = state.entities.findIndex(
                (ticket: any) => ticket._id === action.payload._id
            );
            state.entities[elementIndex] = action.payload;
        },
        removed(state, action) {
            state.entities = state.entities.filter(
                (ticket) => ticket._id !== action.payload
            );
        }
    }
});

const { reducer: ticketsReducer, actions } = ticketsSlice;
const {
    ticketRequested,
    ticketReceived,
    ticketRequestFailed,
    confirmed,
    removed
} = actions;

export const loadTicketsList = () => async (dispatch: Dispatch) => {
    dispatch(ticketRequested());
    try {
        const { content } = await ticketService.fetchAll();
        dispatch(ticketReceived(content));
    } catch (error) {
        dispatch(ticketRequestFailed(error.message));
    }
};

export const confirmTicket = (data: any) => async (dispatch: Dispatch) => {
    try {
        await ticketService.confirm(data._id, data);
        dispatch(confirmed(data));
    } catch (error) {
        dispatch(ticketRequestFailed(error.message));
    }
};

export const removeTicket =
    (ticketId: string) => async (dispatch: Dispatch) => {
        try {
            await ticketService.remove(ticketId);
            dispatch(removed(ticketId));
        } catch (error) {
            dispatch(ticketRequestFailed(error.message));
        }
    };

export const getTickets = () => (state: RootStore) => state.tickets.entities;

export const getTicketsLoading = () => (state: RootStore) =>
    state.tickets.isLoading;

export default ticketsReducer;
