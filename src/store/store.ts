/**
 * @author supunmadhuranga
 * @created 2025-06-14
 * @project vite1
 * @description
 */
import {configureStore} from "@reduxjs/toolkit";
import {rootReducer} from "../slice/rootReducer.ts";


export const store = configureStore({
    reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;

