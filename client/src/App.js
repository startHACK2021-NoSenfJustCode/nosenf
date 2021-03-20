import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Header from './Header.js'
import Footer from './Footer.js'
import Map from './Map.jsx'
import Dashboard from './Dashboard.jsx'
import Heart from './Heart.jsx'
import Plus from './Plus.jsx'
import User from './User.jsx'
import './App.scss';

function App() {
  return (
    <div>
    <Header />
      <figure class="fluidratio"></figure>
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
          <Route exact path="/user">
            <User />
          </Route>
        </Switch>
        <Footer />
      </Router>

    </div >
  )
}



export default App;
