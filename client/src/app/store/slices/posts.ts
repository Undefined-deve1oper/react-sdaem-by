import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import postsService from "../../services/posts.service";
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

interface PostState {
    entities: PostItem[];
    isLoading: boolean;
    error: string | null;
    filteredEntities: PostItem[];
}

const initialState: PostState = {
    entities: [],
    filteredEntities: [],
    isLoading: true,
    error: null
};

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        postsRequested(state) {
            state.isLoading = true;
        },
        postsReceived(state, action: PayloadAction<PostItem[]>) {
            state.entities = action.payload;
            state.isLoading = false;
        },
        postsRequestFailed(state, action) {
            state.error = action.payload;
            state.isLoading = false;
        },
        filteredPostsReceived: (state, action: PayloadAction<PostItem[]>) => {
            state.filteredEntities = action.payload;
            state.isLoading = false;
        }
    }
});

const { reducer: postsReducer, actions } = postsSlice;
const {
    postsRequested,
    postsReceived,
    postsRequestFailed,
    filteredPostsReceived
} = actions;

export const loadPostsList = () => async (dispatch: Dispatch) => {
    dispatch(postsRequested());
    try {
        const { content } = await postsService.fetchAll();
        dispatch(postsReceived(content));
    } catch (error) {
        dispatch(postsRequestFailed(error.message));
    }
};

export const loadFilteredPostsList =
    (queryParams?: any): AppThunk =>
    async (dispatch) => {
        dispatch(postsRequested());
        try {
            const { content } = await postsService.fetchAll(queryParams);
            dispatch(filteredPostsReceived(content || []));
        } catch (error) {
            dispatch(postsRequestFailed(error.message));
        }
    };

export const getPostById = (postId: any) => (state: any) => {
    return state.posts.entities
        ? state.posts.entities.find((post: PostItem) => post._id === postId)
        : null;
};

export const getPostsList = () => (state: RootStore) => state.posts.entities;
export const getPostsLoadingStatus = () => (state: RootStore) =>
    state.posts.isLoading;

export default postsReducer;
