import React, { Component } from 'react';
import Header from './components/layout/Header.js';
import Footer from './components/layout/Footer.js';
import Login from './containers/Login';
import {connect} from 'react-redux';
import * as actionCreators from './actions/index.js';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './containers/Home';
import Read from './containers/Read';
import Post from './containers/Post';



class App extends Component{
  
  render(){
    const PrivateRoute = ({ component: Component, ...rest}) => (
      <Route {...rest} render={(props) => (
        this.props.isLoggedIn() === true
        ? <Component {...props} />
        : <Redirect to='/login'/>
      )} />
    );
    const LoginRoute = ({ component: Component, ...rest}) => (
      <Route {...rest} render={(props) => (
        this.props.isLoggedIn() === false
        ? <Component {...props} />
        : <Redirect to='/'/>
      )} />
    );

    return (
      <div>
        <Header/>
        <Switch>
          <PrivateRoute exact path="/" component = {Home}/>
          <LoginRoute path="/login" component = {Login}/>
          <PrivateRoute path="/read/:id" children = {<Read/>}/>
          <PrivateRoute path="/post" component = {Post}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  return state;
};

export default connect (mapStateToProps, actionCreators)(App);
