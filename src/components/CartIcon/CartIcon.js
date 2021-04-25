import React from 'react';
import { useDispatch, useSelector } from 'react-redux';


import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { toggleCartHidden } from '../../redux/cart/cart-actions';

import './CartIcon.scss';

function CartIcon() {

    let dispatch = useDispatch();

    const Toggle = () => {
        dispatch(toggleCartHidden())
    }

    const cartItems = useSelector(state => state.cart.cartItems )
    const total = cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity , 0)

    return (
    <div className='cart-icon' onClick={Toggle}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{total}</span>
    </div>
    );
}

export default CartIcon;