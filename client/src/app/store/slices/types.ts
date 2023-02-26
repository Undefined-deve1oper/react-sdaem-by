import { createSlice, Dispatch } from "@reduxjs/toolkit";
import typeService from "../../services/type.service";
import { TypeType } from "../../types/types";
import { RootStore } from "../types";

const initialState = {
    entities: [] as Array<TypeType>,
    isLoading: false as boolean,
    error: null as string | null
};

const typesSlice = createSlice({
    name: "types",
    initialState: initialState,
    reducers: {
        typesRequested: (state) => {
            state.isLoading = true;
        },
        typesReceived: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        typesRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        typeCreated: (state, action) => {
            state.entities.push(action.payload);
        },
        typeRemoved: (state, action) => {
            state.entities = state.entities.filter(
                (type) => type._id !== action.payload
            );
        },
        typeUpdated: (state, action) => {
            const typeIndex = state.entities.findIndex(
                (type) => type._id === action.payload._id
            );
            state.entities[typeIndex] = action.payload;
        }
    }
});

const { actions, reducer: typesReducer } = typesSlice;

const {
    typesRequested,
    typesReceived,
    typesRequestFailed,
    typeCreated,
    typeRemoved,
    typeUpdated
} = actions;

export const loadTypesList = () => async (dispatch: Dispatch) => {
    dispatch(typesRequested());
    try {
        const { content } = await typeService.fetchAll();
        dispatch(typesReceived(content));
    } catch (error) {
        dispatch(typesRequestFailed(error.message));
    }
};

export const getTypeById = (typeId: any) => (state: RootStore) => {
    return state.types.entities
        ? state.types.entities.find((type: any) => type._id === typeId)
        : null;
};

export const getTypesList = () => (state: RootStore) => state.types.entities;
export const getTypesLoadingStatus = () => (state: RootStore) =>
    state.types.isLoading;

export default typesReducer;
