
import React, { useState } from "react";
import { Link } from "react-router-dom";

import './sign_in.styles.scss';

//import fresh_food from '../../assets/fresh_food.jpg';


const SignIn = () => {

    const [userCredentials, setCredentials] = useState({ email: '', password: '' });

    const { email, password } = userCredentials;

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // await auth.signInWithEmailAndPassword(email, password);
            setCredentials({ email: '', password: '' });
            console.log('submitted!');
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = event => {
        const { value, name } = event.target;
        setCredentials({ ...userCredentials, [name]: value });
    };


    return (
        <div className='sign-in'>
            <div className='sign-in-image-div'>
                <img className='sign-in-image' src='https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=775&q=80' alt='Fresh Food' title='Fresh Food' />
            </div>
            <div className='sign-in-form-div sign-in-div'>
                <h1 className='sign-in-text'>Sign In</h1>
                <div className='sign-up-question'>
                    Don't have an account?
                    <Link className='sign-up-link' to='/signUpPage'>Sign Up</Link>
                </div>
                <form className='sign-in-form' onSubmit={handleSubmit}>
                    <input
                        className='email-input sign-in-input'
                        type='email'
                        name='email'
                        value={email}
                        onChange={handleChange}
                        placeholder='Email' />
                    <input
                        className='password-input sign-in-input'
                        type='password'
                        name='password'
                        value={password}
                        onChange={handleChange}
                        placeholder='Password' />
                    <input
                        className='submit-input sign-in-input'
                        type='submit'
                        name='submit'
                        value='Sign In' />
                </form>
                <div className='sign-in-buttons'>
                    <button className='google-sign-in sign-in-button'>
                        Sign in with Google
                    </button>
                    <button className='facebook-sign-in sign-in-button'>
                        Sign in with Facebook
                    </button>
                    <button className='twitter-sign-in sign-in-button'>
                        Sign in with Twitter
                    </button>
                </div>
            </div>
        </div>
    );
};


export default SignIn;