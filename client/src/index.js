import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';
 


axios.get('/api/auth/loggedin')
  .then(response => {
    const user = response.data;

    console.log(`index.js`, user)
    
    ReactDOM.render(
      <Router>
        <App user = {user} />
      </Router>,
      document.getElementById('root')
    );
  });


// ReactDOM.render(
//   <React.StrictMode>
//     <Router>
//       <App />
//     </Router>
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
