import React from 'react';

import FromInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import './sign-in.styles.scss';

class SignIn extends React.Component {
    state = {email: '', password: ''};

    handleSubmit = e => {
        e.preventDefault();

        this.setState({email: '', password: ''})
    }

    handleChange = e => {
        const {value, name } = e.target;
        this.setState({[name]: value})
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I alredy have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FromInput id="email" name="email" type="email" label="Email" value={this.state.email} handleChange={this.handleChange} required />
                    <FromInput id="password" name="password" type="password" label="Password" value={this.state.password} handleChange={this.handleChange} required />
                    <CustomButton type="submit"> Sign In </CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;