import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { useSelector } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/crown.svg'
import './Header.scss';


function Header({signOut, ...otherProps}) {

    const currentUser = useSelector(state => state.currentUser)
    
    const sign_out = async () => {
        try {
            await auth.signOut();
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