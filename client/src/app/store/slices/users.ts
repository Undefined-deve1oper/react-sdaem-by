import {
    AnyAction,
    createAction,
    createSlice,
    Dispatch,
    PayloadAction
} from "@reduxjs/toolkit";
import authService from "../../services/auth.service";
import localStorageService from "../../services/localStorage.service";
import userService from "../../services/user.service";
import { SignInDataType, UserType } from "../../types/types";
import generateAuthError from "../../utils/AuthErrors";
import { AppThunk, RootStore } from "../types";

type UserInitialState = {
    entities: UserType[];
    isLoading: boolean;
    error: string | null;
    auth: {
        userId: string | null;
    };
    isLoggedIn: boolean;
    signInError: string | null;
    signUpError: string | null;
};

const initialState: UserInitialState = localStorageService.getAccessToken()
    ? {
          entities: [],
          isLoading: true,
          signInError: null,
          signUpError: null,
          isLoggedIn: true,
          auth: { userId: localStorageService.getUserId() },
          error: null
      }
    : {
          entities: [],
          isLoading: true,
          signInError: null,
          signUpError: null,
          isLoggedIn: false,
          auth: { userId: null },
          error: null
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
            state.isLoading = false;
        },
        usersRequestFailed: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        authRequested: (state) => {
            state.signInError = null;
            state.signUpError = null;
        },
        authRequestSuccess: (state, action) => {
            state.auth = action.payload;
            state.isLoggedIn = true;
        },
        authRequestFailed: (state, action) => {
            state.error = action.payload;
        },
        authSignInRequestFailed(state, action) {
            state.signInError = action.payload;
        },
        authSignUpRequestFailed(state, action) {
            state.signUpError = action.payload;
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
        },
        userDeleted(state, action) {
            state.entities = state.entities.filter(
                (user) => user._id !== action.payload
            );
        },
        savePhotoSuccess: (state, action) => {
            const userIndex = state.entities.findIndex(
                (user) => user._id === action.payload._id
            );
            state.entities[userIndex].avatarImage = action.payload.avatarImage;
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
    authSignInRequestFailed,
    authSignUpRequestFailed,
    userLoggedOut,
    userUpdated,
    savePhotoSuccess
} = actions;

const userUpdateRequested = createAction("users/userUpdateRequested");
const userUpdateRequestedFailed = createAction(
    "users/userUpdateRequestedFailed"
);

export const loadUsersList = (): AppThunk => async (dispatch) => {
    dispatch(usersRequested());
    try {
        const { content } = await userService.fetchAll();
        dispatch(usersReceived(content));
    } catch (error) {
        dispatch(usersRequestFailed(error.message));
    }
};

export const signUp =
    (payload: UserType): AppThunk =>
    async (dispatch) => {
        dispatch(authRequested());
        try {
            const data = await authService.signUp(payload);
            localStorageService.setTokens(data);
            dispatch(authRequestSuccess({ userId: data.userId }));
        } catch (error) {
            dispatch(authRequestFailed(error.message));
            const { message, code } = error.response.data.error;
            if (code === 400) {
                dispatch(authSignUpRequestFailed(generateAuthError(message)));
            } else {
                dispatch(authSignUpRequestFailed(error.message));
            }
        }
    };

export const signIn =
    ({
        payload,
        redirect,
        navigate
    }: {
        payload: SignInDataType;
        redirect?: string;
        navigate: any;
    }): AppThunk =>
    async (dispatch) => {
        const { email, password } = payload;
        dispatch(authRequested());
        try {
            const data = await authService.signIn({ email, password });
            localStorageService.setTokens(data);
            dispatch(authRequestSuccess({ userId: data.userId }));
            navigate(redirect, { replace: true });
        } catch (error) {
            const { message, code } = error.response.data.error;
            if (code === 400) {
                dispatch(authSignInRequestFailed(generateAuthError(message)));
            } else {
                dispatch(authSignInRequestFailed(error.message));
            }
        }
    };

export const updateUserData =
    (payload: UserType, goBack: any): AppThunk =>
    async (dispatch) => {
        dispatch(userUpdateRequested());
        try {
            const { content } = await userService.updateUserData(payload);
            dispatch(userUpdated(content));
            goBack();
        } catch (error) {
            dispatch(userUpdateRequestedFailed());
        }
    };
export const saveUserAvatarPhoto =
    (uint8Array: any) => async (dispatch: Dispatch) => {
        dispatch(usersRequested());
        try {
            const { content } = await userService.saveAvatarPhoto(uint8Array);
            dispatch(savePhotoSuccess(content));
        } catch (error) {
            dispatch(usersRequestFailed(error.message));
        }
    };

export const logOut = (): AppThunk => async (dispatch) => {
    localStorageService.removeAuthData();
    dispatch(userLoggedOut());
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
export const getUserById =
    (userId: string | undefined) => (state: RootStore) => {
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
export const getAuthSignInError = () => (state: RootStore) =>
    state.users.signInError;
export const getAuthSignUpError = () => (state: RootStore) =>
    state.users.signUpError;

export default usersReducer;
