import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

import './sign-in.styles.scss';

const SignIn = ({emailSignInStart, googleSignInStart}) => {

    const [userCredentials, setUserCredentials] = useState({email: '', password: ''});

    const {email, password} = userCredentials;

    const handleSubmit = async e => {
        e.preventDefault();
        emailSignInStart(email, password);
    }

    const handleChange = e => {
        const {value, name} = e.target;
        setUserCredentials(...userCredentials, {[name]: value});
    }

    return (
            <div className="sign-in">
                <h2 className="title">I alredy have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={handleSubmit} className="sign-in-form">
                    <FormInput id="email" name="email" type="email" label="Email" value={email} handleChange={handleChange} required/>
                    <FormInput id="password" name="password" type="password" label="Password" value={password} handleChange={handleChange} required/>
                    <div className="buttons">
                        <CustomButton type="submit"> Sign In </CustomButton>
                        <CustomButton type="button" isGoogleSignin onClick={googleSignInStart}> Sign In With Google </CustomButton>
                    </div>
                </form>
            </div>
    );
};

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn);