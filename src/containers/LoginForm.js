import React, { Component } from 'react'
import Login from '../components/login/Login';
import Register from '../components/login/Register';
import Authenticate from '../components/login/Authenticate';

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
        this.setState({
            step: 2
        });
    }

    //move between register and login
    toLogin = () => {
        this.setState({
            step: 1
        });
    }

    toAuthenticate = () => {
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
            default: 
                return (
                        <Login
                            toRegister = {this.toRegister}
                            handleChange = {this.handleChange}
                            toAuthenticate = {this.toAuthenticate}
                            values= {values}
                        />
                ) 
            case 1:
                return (
                        <Login
                            toRegister = {this.toRegister}
                            handleChange = {this.handleChange}
                            toAuthenticate = {this.toAuthenticate}
                            values= {values}
                        />
                )
            case 2:
                return (
                        <Register
                            toLogin = {this.toLogin}
                            toAuthenticate = {this.toAuthenticate}
                            handleChange = {this.handleChange}
                            values = {values}
                        />
                    )
            case 3:
                return (
                        <Authenticate 
                            handleChange = {this.handleChange}
                            values = {values}
                        />
                    )
        }
    }
}

export default LoginForm

