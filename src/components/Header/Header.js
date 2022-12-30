import React from 'react'
import './Header.css'
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai'


function Header() {
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
                    <input type="text" placeholder="Search.." />
                    <AiOutlineSearch className='search-icon' />
                </div>
            </div>

        </div>
    )
}

export default Header