import React from 'react';

import { useSelector } from 'react-redux';

import './Checkout.scss';

import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';

function Checkout(props) {

    const cartItems = useSelector(state => state.cart.cartItems)
    const total = cartItems.reduce((accumalatedPrice, cartItem) => accumalatedPrice + cartItem.quantity * cartItem.price , 0)

    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(cartItem =>
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />   
                )
            }
            <div className='total'>
                <span>TOTAL: ${total}</span>
            </div>
        </div>
    );
}

export default Checkout;