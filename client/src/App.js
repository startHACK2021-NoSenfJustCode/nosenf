import './App.css';
import './App.scss';

import React, { Component } from 'react'
import { Route , Switch , Redirect, BrowserRouter , Link } from "react-router-dom"

import Header from './Header.js'
import Footer from './Footer.js'
import Map from './Map.jsx'
import Dashboard from './Dashboard.jsx'
import Heart from './Heart.jsx'
import Plus from './Plus.jsx'
import User from './User.jsx'

import Signup from './components/auth/Signup';
import Navbar from './components/navbar/Navbar';
import Login from './components/auth/Login';
import Userprofile from './components/user/Userprofile';



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
        <Navbar user={this.state.user} setUser={this.setUser} />

        <Route
          exact
          path='/signup'
          render={props => <Signup setUser={this.setUser} {...props} />}
        />

        <Route exact path = "/login" 
          render= { props => 
          <Login setUser={this.setUser} {...props}/>}
        />

        <Route exact path = "/profile" 
          // render= { props => {
          //     if (this.state.user) {
          //       return <Userprofile 
          //         user = {this.state.user}
          //         {...props}
          //       />
          //     }
          //     else {return <Redirect to= '/' /> }
              component = { Userprofile } 
          /> 
        <div>
          
        </div>

        <div className="container"> 

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

        </div>


        
      </div>
    );
  }
}

export default App;

// function App() {
//   return (
//     <div className="container"> {//style={{height: window.innerHeight}}>
//     }
//     <Header />
//       <figure class="fluidratio"></figure>
//       <Router>
//         <Switch>
//           <Route exact path="/">
//             <Dashboard />
//           </Route>
//           <Route exact path="/map">
//             <Map />
//           </Route>
//           <Route exact path="/heart">
//             <Heart />
//           </Route>
//           <Route exact path="/plus">
//             <Plus />
//           </Route>
//           <Route exact path="/user">
//             <User />
//           </Route>
//         </Switch>
//         <Footer />
//       </Router>

//     </div >
//   )
// }

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
