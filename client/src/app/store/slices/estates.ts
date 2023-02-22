import { createSlice, Dispatch } from "@reduxjs/toolkit";
import estatesService from "../../services/estates.service";
import { RootStore } from "../types";

export interface EstateInfoItem {
    _id: string;
    description: string;
    ownerId: string;
}

export interface EstateItem {
    _id: string;
    price: string;
    rating: string;
    images: string[];
    city: string;
    label: string;
    title: string;
    brandId: string;
    typeId: string;
    createdAt: string;
    info: EstateInfoItem;
    updatedAt?: string;
}

interface estateState {
    entities: EstateItem[];
    isLoading: boolean;
    error: string | null;
    filteredEntities: EstateItem[];
}

const initialState: estateState = {
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

export const getEstateById = (estateId: any) => (state: any) => {
    return state.estates.entities
        ? state.estates.entities.find(
              (estate: EstateItem) => estate._id === estateId
          )
        : null;
};

export const getEstatesList = () => (state: RootStore) =>
    state.estates.entities;
export const getestatesLoadingStatus = () => (state: RootStore) =>
    state.estates.isLoading;

export default estatesReducer;
