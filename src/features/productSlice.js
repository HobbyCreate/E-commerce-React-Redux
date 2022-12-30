import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'products',
    initialState: {
        items: [],
        selected: [],
    },
    reducers:{
        allProducts: (state, action) => {
            action.payload.map(item => state.items.push(item))
        },
        clearAllProducts: (state) => {
            state.items = [];
        },
        selectedProduct: (state, action) => {
            state.selected = action.payload;
        },
        clearSelectedProduct: (state) => {
            state.selected = [];
        },
    }
});

export const { allProducts, clearAllProducts, selectedProduct, clearSelectedProduct } = productSlice.actions;
export default productSlice.reducer;
