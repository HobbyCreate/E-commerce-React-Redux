import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'products',
    initialState: {
        items: [],
    },
    reducers:{
        allProducts: (state, action) => {
            action.payload.map(item => state.items.push(item))
        },
        singleProduct: (state, action) => {
            state.push(action.payload);
        },
    }
});

export const { allProducts, singleProduct } = productSlice.actions;
export default productSlice.reducer;
