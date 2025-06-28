/**
 * @author supunmadhuranga
 * @created 2025-06-14
 * @project vite1
 * @description
 */
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import type {ProductData} from "../model/ProductData.ts";

interface ProductSlice {
    list: ProductData[],
    error: string | null | undefined
}

const initialState: ProductSlice = {
    list: [],
    error: null
}

export const getAllProducts = createAsyncThunk(
    'prduct/getallProducts',
    async () => {
        const response = await fetch('./product-data.json');
        return await response.json();
    }

)

const productSlice = createSlice({
    name: 'product',
    initialState: initialState,
    reducers: {},
     extraReducers: (builder) => {
        builder.addCase(getAllProducts.pending, (state) => {
            console.log("pending")
        })
        .addCase(getAllProducts.fulfilled, (state, action) => {
            state.list = action.payload;
            console.log("fulfilled")
        })
        .addCase(getAllProducts.rejected, (state , action) => {
           state.error = action.error.message;
           alert("Error fetching data");
        });

    }
})

export default productSlice.reducer;