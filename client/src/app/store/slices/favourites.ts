import { createAction, createSlice, Dispatch } from "@reduxjs/toolkit";
import favouritesService from "../../services/favourites.service";
import { FavouriteType } from "../../types/types";
import { AppThunk, RootStore } from "../types";

const initialState = {
    entities: [] as Array<FavouriteType>,
    isLoading: true as boolean,
    error: null as string | null
};

const favouritesSlice = createSlice({
    name: "favourites",
    initialState: initialState,
    reducers: {
        favouritesRequested: (state) => {
            state.isLoading = true;
        },
        favouritesReceived: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        favouritesRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        favouriteCreated: (state, action) => {
            state.entities.push(action.payload);
        },
        favouriteRemoved: (state, action) => {
            state.entities = state.entities.filter(
                (favourite) => favourite._id !== action.payload
            );
        }
    }
});

const { actions, reducer: favouritesReducer } = favouritesSlice;

const {
    favouritesRequested,
    favouritesReceived,
    favouritesRequestFailed,
    favouriteCreated,
    favouriteRemoved
} = actions;

const favouriteCreateRequested = createAction(
    "favourites/favouriteCreateRequested"
);
const favouriteCreateRequestedFailed = createAction(
    "favourites/favouriteCreateRequestedFailed"
);

const favouriteRemoveRequested = createAction(
    "favourites/favouriteRemoveRequested"
);
const favouriteRemoveRequestedFailed = createAction(
    "favourites/favouriteRemoveRequestedFailed"
);

export const loadFavouritesList =
    (): AppThunk => async (dispatch: Dispatch) => {
        dispatch(favouritesRequested());
        try {
            const { content } = await favouritesService.fetchAll();
            dispatch(favouritesReceived(content));
        } catch (error: any) {
            dispatch(favouritesRequestFailed(error.message));
        }
    };

export const getFavouritesList = () => (state: RootStore) =>
    state.favourites.entities;
export const getFavouritesLoadingStatus = () => (state: RootStore) =>
    state.favourites.isLoading;

export const getFavouritesByEstateId =
    (estateId: string) => (state: RootStore) => {
        if (state.favourites.entities) {
            return state.favourites.entities.filter(
                (favourite) => favourite.estateId === estateId
            );
        }
        return [];
    };

export const getFavouritesByUserId = (userId: string) => (state: RootStore) => {
    if (state.favourites.entities) {
        return state.favourites.entities.filter(
            (favourite) => favourite.userId === userId
        );
    }
    return [];
};

export const createFavourite =
    (payload: { userId: string; estateId: string }): AppThunk =>
    async (dispatch) => {
        dispatch(favouriteCreateRequested());
        try {
            const { content } = await favouritesService.create(payload);
            dispatch(favouriteCreated(content || []));
        } catch (error) {
            dispatch(favouriteCreateRequestedFailed());
        }
    };

export const removeFavourite =
    (payload: { userId: string; estateId: string }): AppThunk =>
    async (dispatch, getState) => {
        dispatch(favouriteRemoveRequested());
        try {
            const { entities } = getState().favourites;
            const userFavourites = entities.filter(
                (favourite: FavouriteType) =>
                    favourite.userId === payload.userId
            );
            const currentFavourite = userFavourites.find(
                (favourite: FavouriteType) =>
                    favourite.estateId === payload.estateId
            );
            if (currentFavourite) {
                const estateId = await favouritesService.remove(
                    currentFavourite._id
                );
                dispatch(favouriteRemoved(estateId));
            }
        } catch (error) {
            dispatch(favouriteRemoveRequestedFailed());
        }
    };

export const getIsFavorite =
    (estateId: string, userId: string) => (state: RootStore) => {
        if (state.favourites.entities) {
            const favoriteEstate = state.favourites.entities.some(
                (favorite) =>
                    favorite.estateId === estateId && favorite.userId === userId
            );
            return favoriteEstate;
        }
    };

export default favouritesReducer;
