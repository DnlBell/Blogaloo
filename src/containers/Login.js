import React, { Component } from 'react'
import Login from '../components/login/Login';
import Register from '../components/login/Register';
import Authenticate from '../components/login/Authenticate';
import NewPassword from '../components/login/NewPassword';
import { Auth } from "aws-amplify";
import { connect } from 'react-redux';
import * as actionCreators from '../actions/index.js';
import history from '../history';
import Amplify, { Analytics, Storage, API, graphqlOperation } from 'aws-amplify';
import * as queries from '../graphql/queries';

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
        this.signUp = this.signUp.bind(this);
        this.validateSignUp = this.validateSignUp.bind(this);
    }

    toRegister = () => {
        this.setState({
            step: 2,
            errorMessage: ''
        });
    }

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

    validateSignUp = () => {

        const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        const emailRegex = new RegExp("/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/");

        if(this.state.password !== this.state.confirmPassword){
            this.setState({errorMessage: 'Passwords do not match.'});
            return false;
        } else if (strongRegex.test(this.state.password)){
            this.setState({errorMessage: 'Passwords must be 8 characters, contain an upper case and lowercase letter, a number, and a special character.'});
            return false;
        } else if (emailRegex.test(this.state.email)){
            this.setState({errorMessage: 'Email address is not valid.'});
            return false;
        }
        return true;
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
            this.props.updateUser(user);
            const getBlogInput = {owner:this.props.user.payload.username}
            const blog = await API.graphql(graphqlOperation(queries.getBlog, {input: getBlogInput}));
            localStorage.setItem('token', user.signInUserSession.idToken.jwtToken);
            history.push('/');
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

    async signUp() {
        if(this.validateSignUp()){
            const email = this.state.email;
            const signUpAttributes = {
                username: this.state.username,
                password: this.state.password,
                attributes: {
                    email:email
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
                            signUp = {this.signUp}
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

