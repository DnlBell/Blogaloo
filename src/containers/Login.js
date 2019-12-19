import React, { Component } from 'react'
import Login from '../components/login/Login';
import Register from '../components/login/Register';
import Authenticate from '../components/login/Authenticate';
import NewPassword from '../components/login/NewPassword';
import { Auth } from "aws-amplify";
import {connect} from 'react-redux';
import * as actionCreators from '../actions/index.js'

class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            step: 1,
            username: '',
            password: '',
            confirmPassword: '',
            email: '',
            authKey: '',
            user: {},
            errorMessage: ''
        }
        this.handleLogin = this.handleLogin.bind(this);
        this.handleNewPassword = this.handleNewPassword.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
    }

    //move between login to register
    toRegister = () => {
        this.setState({
            step: 2,
            errorMessage: ''
        });
    }

    //move between register and login
    toLogin = () => {
        this.setState({
            step: 1,
            errorMessage: ''
        });
    }

    toAuthenticate = () => {
        this.setState({
            errorMessage: '',
            step: 3
        });
    }

    toNewPassword = () => {
        this.setState({
            errorMessage: '',
            step: 4
        })
    }

    handleChange = input => e => {
        this.setState({[input] : e.target.value});
    }

    async handleLogin() {
        try { 
            const user = await Auth.signIn(this.state.username,this.state.password);
            if(user.challengeName === 'NEW_PASSWORD_REQUIRED') {
                this.setState({
                    password: '',
                    user: user
                });
                this.toNewPassword();               
            }
            alert(JSON.stringify(user.signInUserSession.idToken.jwtToken));
            this.props.updateUser(user);
            localStorage.setItem('token', user.signInUserSession.idToken.jwtToken);
        } catch (e) {
            this.setState({
                errorMessage: e.message
            })
        }
    }

    async handleNewPassword() {
        try {
            const loggedUser = await Auth.completeNewPassword(
                this.state.user,
                this.state.password,
            )
            this.setState({
                user: loggedUser
            })
            alert(JSON.stringify(loggedUser));
        } catch (e) {
            this.setState({
                errorMessage: e.message
            });
        }
    }

    async handleSignUp() {
        const email = this.state.email;
        const signUpAttributes = {
            username: this.state.username,
            password: this.state.password,
            attributes: {
                email
            }
        }
        try {
            const newUser = await Auth.signUp(signUpAttributes);
            this.setState({
                user:newUser
            })
            alert(JSON.stringify(this.state.user));
        } catch (e) {
            this.setState({
                errorMessage: e.message
            });
        }
    }


    render() {
        const{ step } = this.state;
        const { username, password, confirmPassword, email, authKey, user, errorMessage } = this.state;
        const values = { username, password, confirmPassword, email, authKey, user, errorMessage }

        switch(step) {
            default: 
                return (
                    <div style={styles.loginBox}>
                        <Login
                            toRegister = {this.toRegister}
                            handleChange = {this.handleChange}
                            handleLogin = {this.handleLogin}
                            values= {values}
                        />
                    </div>
                ) 
            case 1:
                return (
                    <div style={styles.loginBox}>
                        <Login
                            toRegister = {this.toRegister}
                            handleChange = {this.handleChange}
                            handleLogin = {this.handleLogin}
                            values= {values}
                        />
                    </div>
                )
            case 2:
                return (
                    <div style={styles.loginBox}>
                        <Register
                            toLogin = {this.toLogin}
                            toAuthenticate = {this.toAuthenticate}
                            handleChange = {this.handleChange}
                            values = {values}
                        />
                    </div>
                    )
            case 3:
                return (
                    <div style={styles.loginBox}>
                        <Authenticate 
                            handleChange = {this.handleChange}
                            values = {values}
                        />
                    </div>
                    )
            case 4:
                return (
                    <div style={styles.loginBox}>
                        <NewPassword 
                            handleChange = {this.handleChange}
                            handleNewPassword = {this.handleNewPassword}
                            values = {values}
                        />
                    </div>
                    )
        }
    }
}

const styles = {
    loginBox: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    }
  }

  const mapStateToProps = (state)=>{
    return state;
  };
  
  export default connect (mapStateToProps, actionCreators)(LoginForm);

