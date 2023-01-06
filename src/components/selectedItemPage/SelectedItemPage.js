import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
import { selectedProduct, clearSelectedProduct } from '../../features/productSlice'
import { addItemToCart } from '../../features/cartSlice';
import './SelectedItemPage.css';

function SelectedItemPage() {
    const productId = useParams();
    const dispatch = useDispatch();
    const items = useSelector(state => state.products.selected);
    const [select, setSelect] = useState('');
    const [quantity, setQuantity] = useState(1);

    const onPlusHandler = () => {
        setQuantity(prev => prev + 1);
    }

    const onReduceHandler = () => {
        if (quantity > 1) {
            setQuantity(prev => prev - 1);
        }
    }

    const addCartHandler = () => {
        // dispatch item to cart
        dispatch(addItemToCart({
            id: items.id,
            title: items.title,
            description: items.description,
            image: items.image,
            price: items.price,
            quantity: quantity,
            allPrice: Number((items.price * quantity).toFixed(2)),
            checkout: false,
        }))
    }

    useEffect(() => {
        const fetchSelectedProduct = async () => {
            const response = await axios.get(`https://fakestoreapi.com/products/${productId.productId}`)
                .catch((error) => {
                    console.log(error);
                });
            dispatch(selectedProduct(response.data));
            setSelect(response.data)
        };
        if (productId.productId && productId.productId !== '') {
            fetchSelectedProduct()
        }

        return () => {
            dispatch(clearSelectedProduct());
        }
    }, [productId.productId, dispatch]);


    return (
        select === '' || select === 'undefined' ? <div className='loading'><h2>Loading...</h2></div>
            :
            (<div className='selected-container'>
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
                        <h2>{`Price : ${items.price} $`}</h2>
                    </div>
                    <div className='all-btn'>
                        <div className='quantity'>
                            <button className='quantity-reduce btn' onClick={onReduceHandler}>-</button>
                            <input className='quantity-input' value={quantity} onChange={() => quantity}/>
                            <button className='quantity-plus btn' onClick={onPlusHandler}>+</button>
                        </div>
                        <div className='addCart-btn'>
                            <button className='addToCart' onClick={addCartHandler}>Add to Cart</button>
                        </div>
                    </div>

                </div>
            </div>)
    )
}

export default SelectedItemPage