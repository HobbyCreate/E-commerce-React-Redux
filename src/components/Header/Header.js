import React, { useState, useEffect } from 'react'
import './Header.css'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { searchProducts, clearSearchProducts } from '../../features/productSlice'
import { Link } from 'react-router-dom'

function Header() {
    const dispatch = useDispatch();
    const [temp, setTemp] = useState([])
    const items = useSelector(state => state.products.items)
    const cartCount = useSelector(state => state.cart.cartLength);
    let tempArr = [];

    const onBlurHandler = (e) => {
        const search = e.target.value;
        if (search !== '' || search !== 'undefined') {
            if (items !== 'undefined') {
                (items.map(item =>
                    item.title.toLowerCase().includes(search) ? tempArr.push(item) : tempArr
                ));
            }
            setTemp(tempArr)
        }
    }

    useEffect(() => {
        dispatch(clearSearchProducts())
        dispatch(searchProducts(temp))
    }, [dispatch, temp])

    return (
        <div className='header-container'>
            <div className='shop-name'>
                <Link to='/' onClick={dispatch(clearSearchProducts())}><h1>All Around The World Shop</h1></Link>
            </div>
            <div className='functional'>
                <div className='dark-mode'></div>
                <Link to='/cart'>
                    <div className='cart'>
                        <AiOutlineShoppingCart className='cart-icon' />
                        {cartCount === 0 ? '' : <p className='cart-count'>{cartCount}</p>}
                    </div>
                </Link>
                <div className='search-container'>
                    <input type="text" placeholder="Search.."  onBlur={onBlurHandler} />
                    <BiSearch className='search-icon' />
                </div>
            </div>
        </div>
    )
}

export default Header