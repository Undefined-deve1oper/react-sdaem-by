import { createAction, createSlice, Dispatch } from "@reduxjs/toolkit";
import commentsService from "../../services/comments.service";
import { CommentType } from "../../types/types";
import { AppThunk, RootStore } from "../types";

const initialState = {
    entities: [] as Array<CommentType>,
    isLoading: false as boolean,
    error: null as string | null
};

const commentsSlice = createSlice({
    name: "comments",
    initialState: initialState,
    reducers: {
        commentsRequested: (state) => {
            state.isLoading = true;
        },
        commentsReceived: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        commentsRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        commentCreated: (state, action) => {
            state.entities.push(action.payload);
        },
        commentRemoved: (state, action) => {
            state.entities = state.entities.filter(
                (comment) => comment._id !== action.payload
            );
        },
        commentUpdated: (state, action) => {
            const commentIndex = state.entities.findIndex(
                (comment) => comment._id === action.payload._id
            );
            state.entities[commentIndex] = action.payload;
        }
    }
});

const { actions, reducer: commentsReducer } = commentsSlice;

const {
    commentsRequested,
    commentsReceived,
    commentsRequestFailed,
    commentCreated,
    commentRemoved,
    commentUpdated
} = actions;

const commentCreateRequested = createAction("comments/commentCreateRequested");
const commentCreateRequestedFailed = createAction(
    "comments/commentCreateRequestedFailed"
);

const commentUpdateRequested = createAction("comments/commentUpdateRequested");
const commentUpdateRequestedFailed = createAction(
    "comments/commentUpdateRequestedFailed"
);

const commentRemoveRequested = createAction("comments/commentRemoveRequested");
const commentRemoveRequestedFailed = createAction(
    "comments/commentRemoveRequestedFailed"
);

export const loadCommentsList = (): AppThunk => async (dispatch: Dispatch) => {
    dispatch(commentsRequested());
    try {
        const { content } = await commentsService.getAll();
        dispatch(commentsReceived(content || []));
    } catch (error) {
        commentsRequestFailed(error);
    }
};

export const removeComment =
    (commentId: string): AppThunk =>
    async (dispatch) => {
        dispatch(commentRemoveRequested());
        try {
            const id = await commentsService.remove(commentId);
            dispatch(commentRemoved(id));
        } catch (error) {
            dispatch(commentRemoveRequestedFailed());
        }
    };

export const createComment =
    (payload: CommentType): AppThunk =>
    async (dispatch) => {
        dispatch(commentCreateRequested());
        try {
            const { content } = await commentsService.create(payload);
            dispatch(commentCreated(content));
        } catch (error) {
            dispatch(commentCreateRequestedFailed());
        }
    };

export const updateComment =
    (payload: CommentType): AppThunk =>
    async (dispatch) => {
        dispatch(commentUpdateRequested());
        try {
            const { content } = await commentsService.update(payload);
            dispatch(commentUpdated(content));
        } catch (error) {
            console.log(error);
            dispatch(commentUpdateRequestedFailed());
        }
    };

export const getCommentsByIds =
    (commentsIds: string[]) => (state: RootStore) => {
        if (state.comments.entities) {
            return state.comments.entities.filter((comment: CommentType) =>
                commentsIds.includes(comment._id || "")
            );
        } else {
            return [];
        }
    };

export const getCommentsByEstateId = (estateId: any) => (state: RootStore) => {
    if (state.comments.entities) {
        return state.comments.entities.filter(
            (comment: CommentType) => comment.estateId === estateId
        );
    } else {
        return [];
    }
};

export const getComments = () => (state: RootStore) => state.comments.entities;
export const getCommentsLoadingStatus = () => (state: RootStore) =>
    state.comments.isLoading;

export default commentsReducer;
