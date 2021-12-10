
import React, { useState } from "react";

import { Link } from "react-router-dom";

import './sign_up.styles.scss';


const SignUp = () => {

    const [userCredentials, setCredentials] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const { username, email, password, confirmPassword } = userCredentials;

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords don't match!");
            return;
        }

        try {

            setCredentials({
                username: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
            console.log('signed up!');
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = event => {
        const { value, name } = event.target;
        setCredentials({ ...userCredentials, [name]: value });
    };


    return (
        <div className='sign-up'>
            <div className='sign-up-image-div'>
                <img className='sign-up-image' src='https://images.unsplash.com/photo-1467453678174-768ec283a940?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=844&q=80' alt='Fresh Food' title='Fresh Food' />
            </div>
            <div className='sign-up-form-div sign-up-div'>
                <h1 className='sign-up-text'>Sign Up</h1>
                <div className='sign-in-question'>
                    Already have an account?
                    <Link className='sign-in-link' to='/signInPage'>Sign In</Link>
                </div>
                <form className='sign-up-form' onSubmit={handleSubmit}>
                    <input
                        className='username sign-up-input'
                        type='text'
                        name='username'
                        value={username}
                        onChange={handleChange}
                        placeholder='Username' />
                    <input
                        className='email sign-up-input'
                        type='email'
                        name='email'
                        value={email}
                        onChange={handleChange}
                        placeholder='Email' />
                    <input
                        className='password sign-up-input'
                        type='password'
                        name='password'
                        value={password}
                        onChange={handleChange}
                        placeholder='Password' />
                    <input
                        className='confirm-password sign-up-input'
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={handleChange}
                        placeholder='Confirm Password' />
                    <input
                        className='submit sign-up-input'
                        type='submit'
                        name='submit'
                        value='Sign Up' />
                </form>
            </div>
        </div>
    );
};

export default SignUp;