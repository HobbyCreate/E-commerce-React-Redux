import React from 'react'
import { useDispatch } from 'react-redux'
import { clearAllItem } from '../../features/cartSlice'
import './CartHeader.css'

function CartHeader() {
    const dispatch = useDispatch();

    const clearAllHandler = () => {
        dispatch(clearAllItem());
    }
    
    return (
        <div className='detail' >
            <div className='blank'>

            </div>
            <div className='cart-title'>
                <h4>Name</h4>
            </div>
            <div className='cart-price-per-item'>
                <h4>Price / item</h4>
            </div>
            <div className='cart-quantity'>
                <h4>Quantity</h4>
            </div>
            <div className='totlePrice'>
                <h4>Total Price</h4>
            </div>
            <div className='clear-btn' >
                <h4 onClick={clearAllHandler}>Clear All</h4>
            </div>
        </div>
    )
}

export default CartHeader
