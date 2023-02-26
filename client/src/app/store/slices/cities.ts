import { createSlice, Dispatch } from "@reduxjs/toolkit";
import cityService from "../../services/city.service";
import { CityType } from "../../types/types";
import { RootStore } from "../types";

const initialState = {
    entities: [] as Array<CityType>,
    isLoading: false as boolean,
    error: null as string | null
};

const citiesSlice = createSlice({
    name: "cities",
    initialState: initialState,
    reducers: {
        citiesRequested: (state) => {
            state.isLoading = true;
        },
        citiesReceived: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        citiesRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        cityCreated: (state, action) => {
            state.entities.push(action.payload);
        },
        cityRemoved: (state, action) => {
            state.entities = state.entities.filter(
                (city) => city._id !== action.payload
            );
        },
        cityUpdated: (state, action) => {
            const cityIndex = state.entities.findIndex(
                (city) => city._id === action.payload._id
            );
            state.entities[cityIndex] = action.payload;
        }
    }
});

const { actions, reducer: citiesReducer } = citiesSlice;

const {
    citiesRequested,
    citiesReceived,
    citiesRequestFailed,
    cityCreated,
    cityRemoved,
    cityUpdated
} = actions;

export const loadCitiesList = () => async (dispatch: Dispatch) => {
    dispatch(citiesRequested());
    try {
        const { content } = await cityService.fetchAll();
        dispatch(citiesReceived(content));
    } catch (error) {
        dispatch(citiesRequestFailed(error.message));
    }
};

export const getCityById = (cityId: any) => (state: RootStore) => {
    return state.cities.entities
        ? state.cities.entities.find((city: any) => city._id === cityId)
        : null;
};

export const getCitiesList = () => (state: RootStore) => state.cities.entities;
export const getCitiesLoadingStatus = () => (state: RootStore) =>
    state.cities.isLoading;

export default citiesReducer;
