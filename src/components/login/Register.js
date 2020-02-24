import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from './Styles.js';
import ErrorMessage from '../layout/ErrorMessage';


export class Register extends Component {

    toLogin = e => {
        e.preventDefault();
        this.props.toLogin();
    }

    handleSignUp = e => {
        e.preventDefault();
        this.props.signUp();
    }

    render() {
        const { values, handleChange } = this.props;
        return (
            <div style= {styles.box}>
                <h3>Register a new user</h3>
                <ErrorMessage message={values.errorMessage} />
                <TextField 
                    label="Username"
                    onChange={handleChange('username')}
                    defaultValue={values.username}
                    style={styles.input}
                />
                <br/>
                <TextField 
                    label="Email"
                    onChange={handleChange('email')}
                    defaultValue={values.email}
                    style={styles.input}
                />
                <br/>
                <TextField 
                    label="Password"
                    type="password"
                    onChange={handleChange('password')}
                    defaultValue={values.password}
                    style={styles.input}
                />
                <br/>
                <TextField 
                    label="Confirm Password"
                    type="password"
                    onChange={handleChange('confirmPassword')}
                    defaultValue={values.confirmPassword}
                    style={styles.input}
                />
                <br/>
                <div style={styles.buttonRow}>
                    <Button
                        color="secondary"
                        variant="contained"
                        style={styles.button}
                        onClick={this.toLogin}
                        >
                        Login
                    </Button>
                    <Button 
                        color="primary"
                        variant="contained"
                        style={styles.button}
                        onClick={this.handleSignUp}
                        >
                        Submit
                    </Button>
                </div>
        </div>
        )
    }
}

export default Register
