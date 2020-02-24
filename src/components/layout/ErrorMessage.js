import React, { Component } from 'react';

export default class ErrorMessage extends Component {
    render() {
        return(
            <p style={styles.errorMessage}>{this.props.message}</p>
        )
    }
}

const styles = {
    errorMessage: {
        color: 'red'
    }
}