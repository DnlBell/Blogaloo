import React, { Component } from 'react';
import Header from './components/layout/Header.js';
import Login from './containers/Login';
import {connect} from 'react-redux';
import * as actionCreators from './actions/index.js';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './containers/Home';
import Read from './containers/Read';
import Post from './containers/Post';

function App(props) {

  let bacon = '';

  const isLoggedIn = props.isLoggedIn()

  const PrivateRoute = ({ component: Component, ...rest}) => (
    <Route {...rest} render={(props) => (
      isLoggedIn === true
      ? <Component {...props} />
      : <Redirect to='/login'/>
    )} />
  );
  
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component = {Home}/>
        <Route path="/login" component = {Login}/>
        <Route path="/read" component = {Read}/>
        <PrivateRoute path="/post" component = {Post}/>
      </Switch>
    </div>
  );
}

const mapStateToProps = (state)=>{
  return state;
};

export default connect (mapStateToProps, actionCreators)(App);
