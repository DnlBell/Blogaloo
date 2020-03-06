import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from './Styles.js';
import Paper from '@material-ui/core/Paper';

export class Authenticate extends Component {

    handleAuthenticate = e => {
        e.preventDefault();
        this.props.handleVerifyKey();
    }

    render() {
        const { values, handleChange } = this.props;
        return (
            <div style={styles.box}>
                <Paper style={styles.paper}>
                    <h2>Enter authenticaton key</h2>
                    <br/>
                    <TextField 
                        hintText="Key"
                        label="Key"
                        onChange={handleChange('authKey')}
                        defaultValue={values.authKey}
                        style={styles.input}
                    />
                    <br/>
                    <Button
                        color="secondary"
                        variant="contained"
                        style={styles.button}
                        onClick={this.handleAuthenticate}
                    >
                        authenticate
                    </Button>
                </Paper>
            </div>
        )
    }
}

export default Authenticate
