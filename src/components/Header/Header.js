import React, { useState, useEffect } from 'react'
import './Header.css'
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { searchProducts, clearSearchProducts } from '../../features/productSlice'

function Header() {
    const dispatch = useDispatch();
    const [temp, setTemp] = useState([])
    const items = useSelector(state => state.products.items)
    let tempArr = [];


    const onChangeHandler = (e) => {
        const search = e.target.value;
        if(search !== '' || search !== 'undefined'){
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
                <h1>All Around The World Shop</h1>
            </div>
            <div className='functional'>
                <div className='dark-mode'></div>

                <div className='cart'>
                    <AiOutlineShoppingCart className='cart-icon' />
                </div>
                <div className='search-container'>
                    <input type="text" placeholder="Search.." onChange={onChangeHandler} />
                    {/* <AiOutlineSearch className='search-icon' /> */}
                </div>
            </div>

        </div>
    )
}

export default Header