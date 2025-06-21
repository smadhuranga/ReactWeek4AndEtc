/**
 * @author supunmadhuranga
 * @created 2025-06-14
 * @project vite1
 * @description
 */
import {configureStore} from "@reduxjs/toolkit";
import productSlice from "../slice/productSlice.ts";

export const store = configureStore({
    reducer:{
        products: productSlice
    }
});

export type RootState = ReturnType<typeof store.getState>

export const AppDispatch = typeof store.dispatch;

