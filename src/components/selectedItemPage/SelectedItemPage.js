import React, { useEffect } from 'react'
import axios from 'axios';
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectedProduct, clearSelectedProduct } from '../../features/productSlice'
import './SelectedItemPage.css';

function SelectedItemPage() {
    const productId = useParams();
    const dispatch = useDispatch();
    const items = useSelector(state => state.products.selected);

    useEffect(() => {
        const fetchSelectedProduct = async () => {
            const response = await axios.get(`https://fakestoreapi.com/products/${productId.productId}`)
                .catch((error) => {
                    console.log(error);
                });
            dispatch(selectedProduct(response.data));
        };
        if (productId.productId && productId.productId !== '') {
            fetchSelectedProduct()
        }
        return () => {
            dispatch(clearSelectedProduct());
        }
    }, [productId.productId, dispatch]);

    console.log(items)

    return (
        <div className='selected-container'>
            <div className='item-image'>
                <img src={items.image} alt={items.title} />
            </div>
            <div className='item-detail'>
                <div className='item-title'>
                    <h1>{items.title}</h1>
                </div>
                <div className='item-category'>
                    <h4>{items.category}</h4>
                </div>
                <div className='item-description'>
                    <h3>{items.description}</h3>
                </div>
                <div className='item-price'>
                    <h4>{`Price ${items.price} $`}</h4>
                </div>
            </div>
        </div>
    )
}

export default SelectedItemPage