import React from 'react';

import './SignInAndSignUpPage.scss';

import SignIn from '../../components/SignIn/SignIn';

function SignInAndSignUpPage(props) {
    return (
        <div className='sign-in-and-sign-up'>
            <SignIn />
        </div>
    );
}

export default SignInAndSignUpPage;