import React, { Component } from 'react';

export default class Authenticate extends Component {
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