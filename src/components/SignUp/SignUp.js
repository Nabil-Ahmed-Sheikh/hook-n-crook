import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

function SignUp(props) {

    const [formData, setFormData] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const dispatch = useDispatch();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = formData;
        
        if(password !== confirmPassword){
            alert("password don't match");
            return;
        }

        try {
            const { userAuth } = await auth.createUserWithEmailAndPassword(email, password);
           
            const userRef = await createUserProfileDocument(userAuth, {displayName});
            await userRef.onSnapshot((snapshot) => (
                dispatch({
                    type:"SET_CURRENT_USER",
                    payload:{
                    id: snapshot.id,
                    displayName: displayName,
                    email: snapshot.data().email
                    }
                })
            ))

        } catch (error) {
            alert(error.message)
        }

    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    const {displayName, email, password, confirmPassword} = formData;

    return (
        <div className='sign-up'>
            <h2 className='title'>I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit} >
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={handleChange}
                    label='Display Name'
                />
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    label='Email'
                />
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                    label='password'
                /> 
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                    label='Confirm Password'
                />     
                <CustomButton type='submit'> Sign up </CustomButton>
            </form>
        </div>
    );
}

export default SignUp;