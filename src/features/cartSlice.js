import { createSlice } from "@reduxjs/toolkit";

const cartList = localStorage.getItem('cartList') !== null ? JSON.parse(localStorage.getItem('cartList')) : [];
const cartListCount = localStorage.getItem('cartListCount') !== null ? JSON.parse(localStorage.getItem('cartListCount')) : 0;
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: cartList,
        cartLength: cartListCount,
    },
    reducers: {
        addItemToCart: (state, action) => {
            let found = state.cartItems.find(item => item.id === action.payload.id)
            if (found) {
                found.quantity += action.payload.quantity;
            }
            if (!found) {
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
        checkToCheckout: (state, action) => {
            let found = state.cartItems.find(item => item.id === action.payload.id)
            if (found) {
                found.checkout = !found.checkout;
            }
        },
        clearCheckoutItem: (state) => {
            state.cartItems = state.cartItems.filter(item => item.checkout !== true)
            state.cartLength = state.cartItems.length;
        }
    }
});

export const { addItemToCart, removeItemFromCart, clearAllItem, checkToCheckout, clearCheckoutItem } = cartSlice.actions;
export default cartSlice.reducer;
