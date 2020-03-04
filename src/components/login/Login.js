import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from './Styles.js';
import ErrorMessage from './ErrorMessage.js';
import Paper from '@material-ui/core/Paper';

export class Login extends Component {

    toRegister = e => {
        e.preventDefault();
        this.props.toRegister();
    }

    handleLogin = e => {
        e.preventDefault();
        this.props.handleLogin();
    }

    render() {
        const { values, handleChange } = this.props;
        return (
            <div style={styles.box}>
                <Paper style={styles.paper}>
                <h3>Welcome! Please Login or register.</h3>
                <ErrorMessage message={values.errorMessage} />
                <TextField 
                    label="Username"
                    onChange={handleChange('username')}
                    defaultValue={values.username}
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
                <div style={styles.buttonRow}>
                    <Button
                        color="secondary"
                        variant="contained"
                        style={styles.button}
                        onClick={this.toRegister}
                        >
                        Register
                    </Button>
                    <Button 
                        color="primary"
                        variant="contained"
                        style={styles.button}
                        onClick={this.handleLogin}
                        >
                        Submit
                    </Button>
                </div>
                </Paper>
            </div>
        )
    }
}

export default Login
