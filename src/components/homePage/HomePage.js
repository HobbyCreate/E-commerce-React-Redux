import React, { useEffect } from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { allProducts, clearAllProducts } from '../../features/productSlice';
import './HomePage.css';
import CardComponents from '../Card/CardComponents';

function HomePage() {
    const dispatch = useDispatch();

    useEffect(() => {
        
        const fetchProducts = async () => {
            const response = await axios.get('https://fakestoreapi.com/products')
                .catch((error) => {
                    console.log(error);
                });
                dispatch(clearAllProducts());
                dispatch(allProducts(response.data));
        };
        fetchProducts()
    }, [dispatch]);

    // console.log(items)
    
    return (
        <div className='home-container'>
            <div className='category'>
                <h2>All Products</h2>
            </div>
            <div className='products'>
                <CardComponents/>
            </div>

        </div>
    )
}

export default HomePage