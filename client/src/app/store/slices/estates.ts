import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import estatesService from "../../services/estates.service";
import { AppThunk, RootStore } from "../types";

export interface PostItem {
    _id: string;
    title: string;
    previewText: string;
    fullText: string;
    image: string;
    author: string;
    createdAt: string;
    updatedAt?: string;
}

interface estatestate {
    entities: PostItem[];
    isLoading: boolean;
    error: string | null;
    filteredEntities: PostItem[];
}

const initialState: estatestate = {
    entities: [],
    filteredEntities: [],
    isLoading: true,
    error: null
};

const estatesSlice = createSlice({
    name: "estates",
    initialState,
    reducers: {
        estatesRequested(state) {
            state.isLoading = true;
        },
        estatesReceived(state, action) {
            state.entities = action.payload;
            state.isLoading = false;
        },
        estatesRequestFailed(state, action) {
            state.error = action.payload;
            state.isLoading = false;
        },
        filteredEstatesReceived: (state, action) => {
            state.filteredEntities = action.payload;
            state.isLoading = false;
        }
    }
});

const { reducer: estatesReducer, actions } = estatesSlice;
const { estatesRequested, estatesReceived, estatesRequestFailed } = actions;

export const loadEstatesList =
    (queryParams?: any) => async (dispatch: Dispatch) => {
        dispatch(estatesRequested());
        try {
            const { content } = await estatesService.getEstatesByQueryParams(
                queryParams
            );
            dispatch(estatesReceived(content));
        } catch (error) {
            dispatch(estatesRequestFailed(error.message));
        }
    };

export const getPostById = (postId: any) => (state: any) => {
    return state.estates.entities
        ? state.estates.entities.find((post: PostItem) => post._id === postId)
        : null;
};

export const getestatesList = () => (state: RootStore) =>
    state.estates.entities;
export const getestatesLoadingStatus = () => (state: RootStore) =>
    state.estates.isLoading;

export default estatesReducer;
