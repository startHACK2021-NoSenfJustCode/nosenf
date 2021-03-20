import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import { Route , Switch , Redirect, BrowserRouter , Link } from "react-router-dom"

import Signup from './components/auth/Signup';
import Navbar from './components/navbar/Navbar';
import Login from './components/auth/Login';


// We want to use a Signup component in the App.js - here we also add the user to the state
// Therefore we turn App.js into a class component.


class App extends React.Component {

  state = {
    user: this.props.user
  }

  setUser = user => {
    this.setState({
      user: user
    })
  }

  render() {
    return (
      <div className='App' >
        {/* <Navbar user={this.state.user} setUser={this.setUser} /> */}

        <Route
          exact
          path='/signup'
          render={props => <Signup setUser={this.setUser} {...props} />}
        />

        <Route exact path = "/login" 
          render= { props => 
          <Login setUser={this.setUser} {...props}/>}
            // component = { Login } /> //replaced by render
            // render={props => <Login setUser={this.setUser} {...props} />}
        />
        <div>
          
        </div>
        
      </div>
    );
  }
}

export default App;