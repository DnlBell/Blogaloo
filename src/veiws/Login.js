import React from 'react';
import LoginForm from '../containers/LoginForm';

function Login() {
    return (
      <div style={styles.loginBox}>
        <LoginForm/>
      </div>
    );
  }
  
  const styles = {
    loginBox: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    }
  }
  export default Login;
  