import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from './Styles.js';
import Paper from '@material-ui/core/Paper';

export class NewPassword extends Component {

    handleNewPassword = e => {
        e.preventDefault();
        this.props.handleNewPassword();
    }

    render() {
        const { values, handleChange } = this.props;
        return (
            <div styles={styles.box}>
                <Paper style={styles.paper}>
                    <h2>Enter new password</h2>
                    <br/>
                    <TextField 
                        hintText="Password"
                        label="Password"
                        type="password"
                        onChange={handleChange('password')}
                        defaultValue={values.password}
                        style={styles.input}
                    />
                    <br/>
                    <TextField 
                        hintText="Confirm password"
                        label="Confirm Password"
                        type="password"
                        onChange={handleChange('confirmPassword')}
                        defaultValue={values.confirmPassword}
                        style={styles.input}
                    />
                    <br/>
                    <Button
                        color="primary"
                        variant="contained"
                        style={styles.button}
                        onClick={this.handleNewPassword}
                        >
                        Submit
                    </Button>
                </Paper>
            </div>

        )
    }
}

export default NewPassword