import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


export class Login extends Component {

    toRegister = e => {
        e.preventDefault();
        this.props.toRegister();
    }

    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <h2>Please Login</h2>
                    <TextField 
                        hintText="Enter your username"
                        label="Username"
                        onChange={handleChange('username')}
                        defaultValue={values.username}
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
        margin: 12,
        marginTop: 8
    },
    input : {
        margin: 8,
        marginTop: 8
    },
    buttonRow: {
        flexDirection: 'row'
    }
}

export default Login
