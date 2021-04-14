import React, { useState } from 'react';

import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

import { signInWithGoogle } from '../../firebase/firebase.utils' 

import './SignIn.scss';

function SignIn(props) {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })    

    const handleSubmit = (event) => {
        event.preventDefault();
        setFormData({
            email: '',
            password: ''
        })
    }

    const handleChange = (event) => {
        const { value, name } = event.target;
        setFormData(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }


    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput 
                    name='email' 
                    type='email' 
                    value={formData.email}
                    handleChange={handleChange}
                    label='email'
                    required 
                />

                <FormInput 
                    name='password' 
                    type='password' 
                    value={formData.password} 
                    handleChange={handleChange}
                    label='password'
                    required 
                />

                <div className='buttons'>
                    <CustomButton type='submit'> Sign in </CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign in with Google </CustomButton>
                </div>

            </form>


        </div>
    );
}

export default SignIn;