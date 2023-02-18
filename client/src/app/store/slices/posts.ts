import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { act } from "@testing-library/react";
import postsService from "../../services/posts.service";

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
    currentPage: number;
    perPage: number;
    totalCount: number;
}

const initialState: PostState = {
    entities: [],
    isLoading: true,
    error: null,
    currentPage: 1,
    perPage: 6,
    totalCount: 0
};

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        postsRequested(state) {
            state.isLoading = true;
        },
        postsReceived(state, action: PayloadAction<PostState>) {
            state.entities = action.payload.entities;
            state.totalCount = action.payload.totalCount;
            state.isLoading = false;
        },
        postsRequestFailed(state, action) {
            state.error = action.payload;
            state.isLoading = false;
        },
        currentPageChanged(state, action: PayloadAction<number>) {
            state.currentPage = action.payload;
        }
    }
});

const { reducer: postsReducer, actions } = postsSlice;
const {
    postsRequested,
    postsReceived,
    postsRequestFailed,
    currentPageChanged
} = actions;

export const loadPostsList =
    (limit: number, page: number) => async (dispatch: Dispatch) => {
        dispatch(postsRequested());
        try {
            const { content } = await postsService.fetchAll(limit, page);
            dispatch(postsReceived(content));
        } catch (error) {
            dispatch(postsRequestFailed(error.message));
        }
    };
export const getPostById = (postId: string) => (state: any) => {
    return state.posts.entities
        ? state.posts.entities.find((post: PostItem) => post._id === postId)
        : null;
};

export const changeCurrentPage =
    (pageIndex: number) => (dispatch: Dispatch) => {
        dispatch(currentPageChanged(pageIndex));
    };

export default postsReducer;
