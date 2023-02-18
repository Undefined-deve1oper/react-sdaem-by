import { Action, ThunkAction } from "@reduxjs/toolkit";
import type { store } from "./root";

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<Promise<any>, RootStore, unknown, Action>;
