import React from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CustomButton from '../CustomButton/CustomButton';
import CartItem from '../CartItem/CartItem';

import { toggleCartHidden } from '../../redux/cart/cart-actions';
import { useDispatch } from 'react-redux';

import './CartDropdown.scss';

function CartDropdown({history}) {

    const cartItems = useSelector(state => state.cart.cartItems)
    const dispatch = useDispatch();

    return (
        <div className='cart-dropdown'>
            {Object.keys(cartItems).length ? 
            <div className='cart-items'>
                {
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                }
            </div>
            :<span className='empty-message'>Your Cart is empty</span> 
            }
            <CustomButton onClick={() => {
                history.push('/checkout')
                dispatch(toggleCartHidden())
            }} >GO TO CHECKOUT</CustomButton>
        </div>
    );
}

export default withRouter(CartDropdown);