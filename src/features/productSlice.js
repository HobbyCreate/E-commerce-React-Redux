import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'products',
    initialState: {
        items: [],
        selected: [],
        search: [],
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
        searchProducts: (state, action) => {
            action.payload.map(item => state.search.push(item))
        },
        clearSearchProducts: (state) => {
            state.search = [];
        },
    }
});

export const { allProducts, clearAllProducts, selectedProduct, clearSelectedProduct, searchProducts, clearSearchProducts } = productSlice.actions;
export default productSlice.reducer;
