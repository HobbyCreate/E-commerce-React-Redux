import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './CardComponents.css'

function CardComponents() {
    const items = useSelector(state => state.products.items);
    const searchItem = useSelector(state => state.products.search)
    let products;

    console.log(searchItem.length)
        if (searchItem.length !== 0) {
            products = searchItem;
        } else {
            products = items;
        }

    // console.log(searchItem)
    return (
        <>
            {
                products.map(product =>
                    <Link to={`/product/${product.id}`} key={product.id}>
                        <div className='card-container' >
                            <div className='card-image'>
                                <img src={product.image} alt={product.title} />
                            </div>
                            <div className='card-title'>
                                <h3>{product.title}</h3>
                            </div>
                            <div className='card-price-container'>
                                <h4>Price</h4>
                                <div className='card-price'>
                                    {`${product.price} $`}
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            }
        </>

    )
}

export default CardComponents
