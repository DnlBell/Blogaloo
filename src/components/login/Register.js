import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


export class Register extends Component {

    toLogin = e => {
        e.preventDefault();
        this.props.toLogin();
    }

    render() {
        const { values, handleChange } = this.props;
        return (
           <MuiThemeProvider>
                <React.Fragment>
                    <h2>Register a new user</h2>
                    <TextField 
                        hintText="Enter your username"
                        label="Username"
                        onChange={handleChange('username')}
                        defaultValue={values.username}
                        style={styles.input}
                    />
                    <br/>
                    <TextField 
                        hintText="Enter your Email"
                        label="Email"
                        onChange={handleChange('email')}
                        defaultValue={values.email}
                        style={styles.input}
                    />
                    <br/>
                    <TextField 
                        hintText="Enter your password"
                        label="Password"
                        type="password"
                        onChange={handleChange('password')}
                        defaultValue={values.password}
                        style={styles.input}
                    />
                    <br/>
                    <TextField 
                        hintText="Confirm your password"
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
                            >
                            Submit
                        </Button>
                    </div>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 8,
        marginTop: 12
    },
    input : {
        margin: 8,
        marginTop: 8
    },
    buttonRow: {
        flexDirection: 'row'
    }
}

export default Register
