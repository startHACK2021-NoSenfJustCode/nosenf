import './styles/App.scss';

import React, { Component } from 'react'
import { Route, Switch, Redirect, BrowserRouter, Link } from "react-router-dom"

import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Map from './components/Map.jsx'
import Dashboard from './components/Dashboard.jsx'
import Heart from './components/Heart.jsx'
import Plus from './components/Plus.jsx'


import Signup from './components/auth/Signup';
// import Navbar from './components/navbar/Navbar';
import Login from './components/auth/Login';
import Userprofile from './components/user/Userprofile';
// import User from './User.jsx'

// import { Router } from 'express';
import { BrowserRouter as Router } from 'react-router-dom';

import './styles/button.css';


class App extends React.Component {

  state = {
    user: this.props.user,
    pathname: window.location.pathname
  }

  setUser = user => {
    this.setState({
      user: user
    })
  }

  updatePathname() {
    this.setState({ pathname: window.location.pathname })
  }

  render() {
    const { pathname } = this.state
    return (
      < div className="container" style={{ "marginTop": "100px" }}  onClick={this.updatePathname.bind(this)}>

        <Header />
        <figure className="fluidratio"></figure>
        <Router>
          <Switch>

            <Route exact path="/">
              <Dashboard />
            </Route>

            <Route exact path="/map">
              <Map />
            </Route>

            <Route exact path="/heart">
              <Heart />
            </Route>

            <Route exact path="/plus">
              <Plus />
            </Route>

            <Route exact path="/user"
              component={Userprofile} />

                <Route exact path="/plus"
                  render={(props) => 
                  <Plus setUser={this.setUser} {...props}/>}>
                  {/* <Plus /> */}
                </Route>

          </Switch>


          <Route
            exact
            path='/signup'
            render={props => <Signup setUser={this.setUser} {...props} />}
          />

          <Route exact path="/login"
            render={props =>
              <Login setUser={this.setUser} {...props} />}
          />

          <Footer pathname={pathname} />
        </Router>

      </div>
    );
  }
}

export default App;
