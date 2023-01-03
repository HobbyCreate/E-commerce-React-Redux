import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import './CartPage.css'
import { RiDeleteBin5Line } from 'react-icons/ri'
import CartHeader from './CartHeader'
import { removeItemFromCart } from '../../features/cartSlice'
import CartSummary from './CartSummary'

function CartPage() {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.cartItems)

    const onRemoveHandler = (item) => {
        dispatch(removeItemFromCart(item))
    }

    return (
        <>
            {
                cart.length === 0 ?
                    (
                        <div className='empty-cart'>
                            <h2>Sorry, your cart is empty</h2>
                            <Link to='/'><h3 className='go-shop'>Go shopping</h3></Link>
                        </div>
                    )
                    : (
                        <div className='cart-container'>
                            <CartHeader />
                            {
                                cart.map((item) =>
                                    <div className='cart-detail' key={item.id}>
                                        <div className='cart-image'>
                                            <img src={item.image} alt={item.title}></img>
                                        </div>
                                        <div className='cart-title'>
                                            <h4>{item.title}</h4>
                                        </div>
                                        <div className='cart-price-per-item'>
                                            <h4>{`${item.price} $`}</h4>
                                        </div>
                                        <div className='cart-quantity'>
                                            <h4>{item.quantity}</h4>
                                        </div>
                                        <div className='cart-totlePrice'>
                                            <h4>{`${item.allPrice} $`}</h4>
                                        </div>
                                        <div className='bin'>
                                            <RiDeleteBin5Line onClick={() => onRemoveHandler(item)} />
                                        </div>
                                    </div>
                                )
                            }
                            <CartSummary />
                        </div>
                    )
            }
        </>
    )
}

export default CartPage
