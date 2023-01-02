import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
        cartLength : 0,
    },
    reducers: {
        addItemToCart: (state, action) => {
            let duplicate;
            state.cartItems.forEach(item => {
                if (Number(JSON.stringify(item.id)) === action.payload.id) {
                    duplicate = true;
                }
                if (duplicate) {
                    item.quantity += action.payload.quantity;
                    item.allPrice = Number((item.price * item.quantity).toFixed(2));
                } 
            })
            if (!duplicate) {
                    state.cartItems.push(action.payload);
                    state.cartLength += 1;
                }
        },
        removeItemFromCart: (state, action) => {
            state.cartLength -= 1;
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id)
            
        },
        clearAllItem: (state) => {
            state.cartItems = [];
            state.cartLength = 0;
        },
    }
});

export const { addItemToCart, removeItemFromCart, clearAllItem } = cartSlice.actions;
export default cartSlice.reducer;
