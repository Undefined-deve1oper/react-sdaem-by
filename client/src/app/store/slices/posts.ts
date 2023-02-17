import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import postsService from "../../services/posts.service";

export interface PostRow {
    _id: string;
    title: string;
    previewText: string;
    fullText: string;
    image: string;
    author: string;
    createdAt: string;
    updatedAt?: string;
}

export interface PostItem {
    count: number;
    rows: PostRow[];
}

interface PostState {
    entities: PostItem;
    isLoading: boolean;
    error: string | null;
}

const initialState: PostState = {
    entities: {
        count: 0,
        rows: []
    },
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
        postsReceived(state, action: PayloadAction<PostItem>) {
            state.entities = action.payload;
            state.isLoading = false;
        },
        postsRequestFailed(state, action) {
            state.error = action.payload;
            state.isLoading = false;
        }
    }
});

const { reducer: postsReducer, actions } = postsSlice;
const { postsRequested, postsReceived, postsRequestFailed } = actions;

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
        ? state.posts.entities.find((post: PostRow) => post._id === postId)
        : null;
};

export default postsReducer;
