import React, { useState, useEffect } from 'react'
import './Header.css'
import { AiOutlineShoppingCart } from 'react-icons/ai'
// import { BiSearch } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { searchProducts, clearSearchProducts } from '../../features/productSlice'
import { Link } from 'react-router-dom'

function Header() {
    const dispatch = useDispatch();
    const [result, setResult] = useState([])
    const [search, setSearch] = useState('')
    const items = useSelector(state => state.products.items)
    const cartCount = useSelector(state => state.cart.cartLength);

    // onChangeHandler function and searchByProducts function.
    // use for handler search event when user press 'Enter' key from keyboard on PC
    // or press 'search/Go' key from virtual keyboard on mobile or tablet

    const onChangeHandler = (e) => {
        setSearch((e.target.value).toLowerCase())
    }
    const searchByProducts = (e) => {
        if (e.key === "Enter") {
            if (search !== '' || search !== 'undefined') {
                if (items !== 'undefined') {
                    const tempArr = items.filter((item) =>
                        item.title.toLowerCase().includes(search))
                    setResult(tempArr)
                }
            }
        }
    };

    useEffect(() => {
        dispatch(clearSearchProducts())
        dispatch(searchProducts(result))
    }, [dispatch, result])

    return (
        <div className='header-container'>
            <div className='shop-name'>
                <Link to='/' onClick={() => dispatch(clearSearchProducts())}><h1>All Around The World Shop</h1></Link>
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
                    <input
                        type="text"
                        placeholder="Search.."
                        onChange={onChangeHandler}
                        value={search}
                        onKeyUp={searchByProducts}
                    />
                </div>
            </div>
        </div>
    )
}

export default Header