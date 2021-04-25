import React from 'react';

import './CheckoutItem.scss'

import { useDispatch } from 'react-redux';
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart-actions';

function CheckoutItem({ cartItem }) {

    const {name, imageUrl, price, quantity} = cartItem;

    let dispatch = useDispatch();


    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item' />
            </div>
            <span className='name'>{name} </span>
            <span className='quantity'>
                <div className='arrow' onClick={() => dispatch(removeItem(cartItem))} >&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => dispatch(addItem(cartItem))}>&#10095;</div>
            </span>
            <span className='price'>{price} </span>
            <span className='remove-button' onClick={() => dispatch(clearItemFromCart(cartItem))} >&#10005;</span>
        </div>
    );
}

export default CheckoutItem;