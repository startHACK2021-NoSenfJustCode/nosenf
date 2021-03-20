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
    <div className="container"> {//style={{height: window.innerHeight}}>
    }
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

/*    <div className="App">
   <Header></Header>
  
  <header className="App-header">
 
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </header>
  <Footer></Footer>
  <Routes/>
</div >
);
}
*/

export default App;
