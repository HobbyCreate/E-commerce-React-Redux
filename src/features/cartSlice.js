import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
    },
    reducers:{
        addItemToCart: (state, action) => {
            action.payload.map(item => state.cartItems.push(item))
        },
        clearAllItem: (state) => {
            state.cartItems = [];
        },
    }
});

export const { addItemToCart, clearAllItem } = cartSlice.actions;
export default cartSlice.reducer;
