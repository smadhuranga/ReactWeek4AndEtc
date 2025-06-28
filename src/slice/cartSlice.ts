/**
 * @author supunmadhuranga
 * @created 2025-06-21
 * @project vite1
 * @description
 */
import type {CartItme} from "../model/CartItme.ts";
import {createSlice} from "@reduxjs/toolkit";
import type {ProductData} from "../model/ProductData.ts";

interface CartState {
    items: CartItme[];

}

const initialState: CartState = {
    items: []
}
const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addItemToCart: (state: CartState, action: ReturnType<ProductData>) => {
            const existingItem = state.items.find(item => item.product.id === action.payload.id);
            if (!existingItem) {
                state.items.push({
                    product: action.payload,
                    itemCount: 1

                    })
            }
        }
    }
});

export const  {addItemToCart} = cartSlice.actions;

export  default cartSlice.reducer;