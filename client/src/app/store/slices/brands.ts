import { createSlice, Dispatch } from "@reduxjs/toolkit";
import brandService from "../../services/brand.service";
import { BrandType } from "../../types/types";
import { RootStore } from "../types";

const initialState = {
    entities: [] as Array<BrandType>,
    isLoading: false as boolean,
    error: null as string | null
};

const brandsSlice = createSlice({
    name: "brands",
    initialState: initialState,
    reducers: {
        brandsRequested: (state) => {
            state.isLoading = true;
        },
        brandsReceived: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        brandsRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        brandCreated: (state, action) => {
            state.entities.push(action.payload);
        },
        brandRemoved: (state, action) => {
            state.entities = state.entities.filter(
                (brand) => brand._id !== action.payload
            );
        },
        brandUpdated: (state, action) => {
            const brandIndex = state.entities.findIndex(
                (brand) => brand._id === action.payload._id
            );
            state.entities[brandIndex] = action.payload;
        }
    }
});

const { actions, reducer: brandsReducer } = brandsSlice;

const {
    brandsRequested,
    brandsReceived,
    brandsRequestFailed,
    brandCreated,
    brandRemoved,
    brandUpdated
} = actions;

export const loadBrandsList = () => async (dispatch: Dispatch) => {
    dispatch(brandsRequested());
    try {
        const { content } = await brandService.fetchAll();
        dispatch(brandsReceived(content));
    } catch (error) {
        dispatch(brandsRequestFailed(error.message));
    }
};

export const getBrandById = (brandId: any) => (state: RootStore) => {
    return state.brands.entities
        ? state.brands.entities.find((brand: any) => brand._id === brandId)
        : null;
};

export const getBrandsList = () => (state: RootStore) => state.brands.entities;
export const getBrandsLoadingStatus = () => (state: RootStore) =>
    state.brands.isLoading;

export default brandsReducer;
