import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clearAllItem } from '../../features/cartSlice'
import './CartSummary.css';

function CartSummary() {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.cartItems);
    const cartCount = useSelector(state => state.cart.cartLength);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQyt, setTotalQyt] = useState(0);

    const onCheckHandler = () => {
        dispatch(clearAllItem());
        alert('check out completed')
    };

    useEffect(() => {
        const sumPriceAllItems = () => {
            let sumPrice = 0;
            let sumQyt = 0;
            cart.forEach(element => {
                sumPrice += element.allPrice;
                sumQyt += element.quantity;
            });
            setTotalPrice(sumPrice);
            setTotalQyt(sumQyt)
        }
        sumPriceAllItems()

    }, [cart])

    return (
        <div className='summary-container'>
            <div className='total-item'>
                <h4 className='text'>Total product</h4>
                {
                    cartCount > 1 ? <h4>{`${cartCount} products`}</h4> : <h4>{`${cartCount} product`}</h4>
                }
            </div>
            <div className='total-quantity'>
                <h4 className='text'>Total item</h4>
                {
                    totalQyt > 1 ? <h4>{`${totalQyt} items`}</h4> : <h4>{`${totalQyt} item`}</h4>
                }
            </div>
            <div className='total-price'>
                <h4 className='text'>Total price</h4>
                <h4>{`${totalPrice.toFixed(2)} $`}</h4>
            </div>
            <div className='check-btn'>
                <h4 onClick={onCheckHandler}>Check out</h4>
            </div>
        </div>
    )
}

export default CartSummary
