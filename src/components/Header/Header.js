import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { useSelector, useDispatch } from 'react-redux';


import { ReactComponent as Logo } from '../../assets/crown.svg'
import './Header.scss';


function Header({...otherProps}) {

    const currentUser = useSelector(state => state.user.currentUser);
    const dispatch = useDispatch();

    // console.log(currentUser);
    
    const sign_out = async () => {
        try {
            auth.signOut().then(() => (
                dispatch({
                    type:"SET_CURRENT_USER",
                    payload: null
                })
            ))
        } catch (error) {
            
        }
    }
    return (
        <div className="header">
            <Link className='logo-container' to="/">
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/contact'>
                    CONTACT
                </Link>
                {
                    currentUser ?
                    (<div className='option' onClick={sign_out} >SIGN OUT</div>) :
                    (<Link className='option' to='/signin'>
                        SIGN IN
                    </Link>)
                }
            </div>
        </div>
    );
}



export default Header;