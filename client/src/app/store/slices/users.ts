import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import localStorageService, {
    setTokens
} from "../../services/localStorage.service";
import userService from "../../services/user.service";
import { SignInDataType, UserType } from "../../types/types";
import generateAuthError from "../../utils/AuthErrors";
import authService from "../../services/auth.service";
import { AppThunk, RootStore } from "../types";

type UserInitialState = {
    entities: UserType[];
    isLoading: boolean;
    error: string | null;
    auth: {
        userId: string | null;
    };
    isLoggedIn: boolean;
    dataLoaded: boolean;
};

const initialState: UserInitialState = localStorageService.getAccessToken()
    ? {
          entities: [],
          isLoading: true,
          error: null,
          auth: { userId: localStorageService.getUserId() },
          isLoggedIn: true,
          dataLoaded: false
      }
    : {
          entities: [],
          isLoading: false,
          error: null,
          auth: { userId: null },
          isLoggedIn: false,
          dataLoaded: false
      };

const usersSlice = createSlice({
    name: "users",
    initialState: initialState,
    reducers: {
        usersRequested: (state) => {
            state.isLoading = true;
        },
        usersReceived: (state, action: PayloadAction<UserType[]>) => {
            state.entities = action.payload;
            state.dataLoaded = true;
            state.isLoading = false;
        },
        usersRequestFailed: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        authRequested: (state) => {
            state.error = null;
        },
        authRequestSuccess: (state, action) => {
            state.auth = action.payload;
            state.isLoggedIn = true;
        },
        authRequestFailed: (state, action) => {
            state.error = action.payload;
        },
        userCreated: (state, action) => {
            state.entities.push(action.payload);
        },
        userLoggedOut: (state) => {
            state.isLoggedIn = false;
            state.auth.userId = null;
        },
        userUpdated: (state, action) => {
            const index = state.entities.findIndex(
                (user) => user._id === action.payload._id
            );
            state.entities[index] = action.payload;
        }
    }
});

const { actions, reducer: usersReducer } = usersSlice;
const {
    usersRequested,
    usersReceived,
    usersRequestFailed,
    authRequested,
    authRequestSuccess,
    authRequestFailed,
    userLoggedOut,
    userUpdated
} = actions;

const userUpdateRequested = createAction("users/userUpdateRequested");
const userUpdateRequestedFailed = createAction(
    "users/userUpdateRequestedFailed"
);

export const updateUserData =
    (payload: UserType): AppThunk =>
    async (dispatch) => {
        dispatch(userUpdateRequested());
        try {
            const { content } = await userService.updateUserData(payload);
            dispatch(userUpdated(content));
        } catch (error) {
            dispatch(userUpdateRequestedFailed());
        }
    };

export const signUp =
    (payload: UserType): AppThunk =>
    async (dispatch) => {
        dispatch(authRequested());
        try {
            const data = await authService.signUp(payload);
            setTokens(data);
            dispatch(authRequestSuccess({ userId: data.userId }));
        } catch (error) {
            dispatch(authRequestFailed(error.message));
        }
    };

export const signIn =
    ({ payload }: { payload: SignInDataType }): AppThunk =>
    async (dispatch) => {
        const { email, password } = payload;
        dispatch(authRequested());
        try {
            const data = await authService.signIn({ email, password });
            setTokens(data);
            dispatch(authRequestSuccess({ userId: data.userId }));
        } catch (error) {
            const { code, message } = error.response.data.error;
            if (code === 400) {
                const errorMessage = generateAuthError(message);
                dispatch(authRequestFailed(errorMessage));
            } else {
                dispatch(authRequestFailed(error.message));
            }
        }
    };

export const logOut = (): AppThunk => async (dispatch) => {
    localStorageService.removeAuthData();
    dispatch(userLoggedOut());
};

export const loadUsersList = (): AppThunk => async (dispatch) => {
    dispatch(usersRequested());
    try {
        const { content } = await userService.fetchAll();
        dispatch(usersReceived(content));
    } catch (error) {
        dispatch(usersRequestFailed(error.message));
    }
};

export const getUsersList = () => (state: RootStore) => state.users.entities;
export const getCurrentUserData = () => (state: RootStore) => {
    if (state.users.auth) {
        return state.users.entities
            ? state.users.entities.find(
                  (user: UserType) => user._id === state.users.auth.userId
              )
            : null;
    }
};

export const getUsersLoadingStatus = () => (state: RootStore) =>
    state.users.isLoading;
export const getUserById = (userId: string) => (state: RootStore) => {
    if (state.users.entities) {
        return state.users.entities.find(
            (user: UserType) => user._id === userId
        );
    }
};
export const getIsLoggedIn = () => (state: RootStore) => state.users.isLoggedIn;
export const getCurrentUserId = () => (state: RootStore) => {
    return state.users.auth.userId;
};
export const getAuthErrors = () => (state: RootStore) => state.users.error;

export default usersReducer;
