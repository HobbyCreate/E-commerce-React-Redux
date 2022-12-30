import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className='header-container'>
            <ul>
                <li>
                    <a href='/'>Home</a>
                    <a href='cart'>Product</a>
                </li>
            </ul>
        </div>
    )
}

export default Header