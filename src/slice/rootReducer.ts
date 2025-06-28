/**
 * @author supunmadhuranga
 * @created 2025-06-21
 * @project vite1
 * @description
 */


import {combineReducers} from "redux";
import productReducer from "./productSlice.ts";
import cartReducer from "./cartSlice.ts";

export const rootReducer = combineReducers({
    products: productReducer,
    cart: cartReducer,

});

export type RootReducerState = ReturnType<typeof rootReducer>
