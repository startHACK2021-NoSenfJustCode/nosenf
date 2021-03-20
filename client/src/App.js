import React from 'react';
import Header from './Header.js'
import Footer from './Footer.js'
import './App.css';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
