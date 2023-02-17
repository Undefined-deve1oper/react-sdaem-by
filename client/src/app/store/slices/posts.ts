import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
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
}

const initialState: PostState = {
    entities: [],
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
        }
    }
});

const { reducer: postsReducer, actions } = postsSlice;
const { postsRequested, postsReceived, postsRequestFailed } = actions;

export const loadPostsList = () => async (dispatch: Dispatch) => {
    dispatch(postsRequested());
    try {
        const { content } = await postsService.fetchAll();
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

export default postsReducer;
