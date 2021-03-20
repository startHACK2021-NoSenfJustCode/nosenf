import React from 'react';
// import './navbar.css';
import { Link } from 'react-router-dom'
import { logout } from '../../services/auth';


const handleLogout = props => {
  console.log(props);
  logout().then(() => {
    props.setUser(null);
  });
};


export default function Navbar(props) {
  
  return (
    <div>
      <div className="navbar">

      <Link className="navbar-link" to="/">
        home
      </Link>

        <div>

          {props.user ? (
            <>
              <Link className="navbar-link" to='/' 
                onClick={ () => handleLogout (props) }>
                Logout
              </Link>

              <Link className="navbar-link" to = "/profile">User Profile</Link>
            </>
          ) : ( 
            <>
              <Link className="navbar-link" to = "/login">Login</Link>

              <Link className="navbar-link" to = "/signup">Sign Up</Link>
            </>
          )}
          
        </div>
      </div>
    </div>
  )
}