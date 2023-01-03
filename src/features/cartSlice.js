import { createSlice } from "@reduxjs/toolkit";

const cartList = localStorage.getItem('cartList') !== null ? JSON.parse(localStorage.getItem('cartList')) : [];
const cartListCount = localStorage.getItem('cartListCount') !== null ? JSON.parse(localStorage.getItem('cartListCount')) : 0;
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: cartList,
        cartLength : cartListCount,
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
            localStorage.setItem('cartList', JSON.stringify(state.cartItems));
            localStorage.setItem('cartListCount', JSON.stringify(state.cartLength));
        },
        removeItemFromCart: (state, action) => {
            state.cartLength -= 1;
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id)
            localStorage.setItem('cartList', JSON.stringify(state.cartItems));
            localStorage.setItem('cartListCount', JSON.stringify(state.cartLength));
        },
        clearAllItem: (state) => {
            state.cartItems = [];
            state.cartLength = 0;
            localStorage.setItem('cartList', JSON.stringify(state.cartItems));
            localStorage.setItem('cartListCount', JSON.stringify(state.cartLength));
        },
    }
});

export const { addItemToCart, removeItemFromCart, clearAllItem } = cartSlice.actions;
export default cartSlice.reducer;
