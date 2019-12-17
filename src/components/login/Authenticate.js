import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class Authenticate extends Component {
    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
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
                        onClick={this.toLogin}
                        >
                        authenticate
                    </Button>
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
    }
}

export default Authenticate
