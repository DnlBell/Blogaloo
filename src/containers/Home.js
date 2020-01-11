import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/index.js';

class Home extends Component {

    render(){
        if(this.props.user.isLoggedIn){
            return(
                <div style={styles.HomeBox}>
                    <h1>Welcome {this.props.user.payload.username} !</h1>
                    <h2>Read posts or submit one of your own!</h2>
                </div>
            );
        } else {
            return(
                <div style={styles.HomeBox}>
                    <h1>Welcome!</h1>
                    <h2>Sign in, or register a new account!</h2>
                </div>
            );
        }
    }

}

const styles = {
    HomeBox: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    }
}

const mapStateToProps = (state)=>{
    return state;
};

export default connect (mapStateToProps, actionCreators)(Home);