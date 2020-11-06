import React from 'react';
import {connect} from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {googleSignInStart, emailSignInStart} from "../../redux/user/user.actions";

import './sign-in.styles.scss';

class SignIn extends React.Component {
    state = {email: '', password: ''};

    handleSubmit = async e => {
        e.preventDefault();
        const {emailSignInStart} = this.props;
        const {email, password} = this.state;
        emailSignInStart(email, password);
    }

    handleChange = e => {
        const {value, name } = e.target;
        this.setState({[name]: value})
    }

    render() {
        const {googleSignInStart} = this.props;
        return (
            <div className="sign-in">
                <h2 className="title">I alredy have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit} className="sign-in-form">
                    <FormInput id="email" name="email" type="email" label="Email" value={this.state.email} handleChange={this.handleChange} required />
                    <FormInput id="password" name="password" type="password" label="Password" value={this.state.password} handleChange={this.handleChange} required />
                    <div className="buttons">
                        <CustomButton type="submit"> Sign In </CustomButton>
                        <CustomButton type="button" isGoogleSignin onClick={googleSignInStart}> Sign In With Google </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn);