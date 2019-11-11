import React, { Component } from 'react'
import Login from './Login';
import Register from './Register';

export class LoginForm extends Component {
    state = {
        step: 1,
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
        authKey: ''
    }

    //move between login to register
    toRegister = () => {
        const { step } = this.state;
        this.setState({
            step: 2
        });
    }

    //move between register and login
    toLogin = () => {
        const { step } = this.state;
        this.setState({
            step: 1
        });
    }

    toAuthenticate = () => {
        const { step } = this.state;
        this.setState({
            step: 3
        });
    }

    handleChange = input => e => {
        this.setState({[input] : e.target.value});
    }

    render() {
        const{ step } = this.state;
        const { username, password, confirmPassword, email, authKey } = this.state;
        const values = { username, password, confirmPassword, email, authKey }

        switch(step) {
            case 1:
                return (
                        <Login
                            toRegister = {this.toRegister}
                            handleChange = {this.handleChange}
                            values= {values}
                        />
                )
            case 2:
                return (
                        <Register
                            toLogin = {this.toLogin}
                            handleChange = {this.handleChange}
                            values = {values}
                        />
                    )
            case 3:
                return <h1>Authenticate</h1>
            
        }
    }
}

export default LoginForm

