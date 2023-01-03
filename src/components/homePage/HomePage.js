import React, { useEffect } from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { allProducts, clearAllProducts } from '../../features/productSlice';
import './HomePage.css';
import CardComponents from '../Card/CardComponents';

function HomePage() {
    const dispatch = useDispatch();
    const items = useSelector(state => state.products.items);

    useEffect(() => {
        // check items before fecth data.
        // if items in LocalStorage is empty then fecth
        if (items.length === 0) {
            const fetchProducts = async () => {
                const response = await axios.get('https://fakestoreapi.com/products')
                    .catch((error) => {
                        console.log(error);
                    });
                dispatch(clearAllProducts());
                dispatch(allProducts(response.data));
            };
            fetchProducts()
        }

    }, [dispatch, items]);

    return (
        <div className='home-container'>
            <div className='category'>
                <h2>All Products</h2>
            </div>
            <div className='products'>
                <CardComponents />
            </div>

        </div>
    )
}

export default HomePage