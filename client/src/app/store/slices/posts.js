import { createSlice } from "@reduxjs/toolkit";
import postsService from "../../services/posts.service";

const initialState = {
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
        postsReceived(state, action) {
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

export const loadPostsList = () => async (dispatch) => {
    dispatch(postsRequested());
    try {
        const { content } = await postsService.fetchAll();
        dispatch(postsReceived(content));
    } catch (error) {
        dispatch(postsRequestFailed(error.message));
    }
};

export const getPosts = () => (state) => state.posts.entities;

export const getPostById = (postId) => (state) => {
    return state.posts.entities
        ? state.posts.entities.find((post) => post._id === postId)
        : null;
};

export const getPostsLoading = () => (state) => state.posts.isLoading;

export default postsReducer;
