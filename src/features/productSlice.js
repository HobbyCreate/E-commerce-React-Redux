import { createSlice } from "@reduxjs/toolkit";


const allProductsList = localStorage.getItem('allProducts') !== null ? JSON.parse(localStorage.getItem('allProducts')) : [];
const productSlice = createSlice({
    name: 'products',
    initialState: {
        items: allProductsList,
        selected: [],
        search: [],
    },
    reducers:{
        allProducts: (state, action) => {
            action.payload.forEach(item => state.items.push(item))
            localStorage.setItem('allProducts', JSON.stringify(state.items));
        },
        clearAllProducts: (state) => {
            state.items = [];
            localStorage.setItem('allProducts', JSON.stringify(state.items));
        },
        selectedProduct: (state, action) => {
            state.selected = action.payload;
        },
        clearSelectedProduct: (state) => {
            state.selected = [];
        },
        searchProducts: (state, action) => {
            action.payload.forEach(item => state.search.push(item))
        },
        clearSearchProducts: (state) => {
            state.search = [];
        },
    }
});

export const { allProducts, clearAllProducts, selectedProduct, clearSelectedProduct, searchProducts, clearSearchProducts } = productSlice.actions;
export default productSlice.reducer;
