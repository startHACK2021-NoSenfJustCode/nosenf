import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { login } from '../../services/auth';
import './auth.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Form, Button, Alert, Container } from 'react-bootstrap';
import '../../styles/button.css';


export default class Login extends Component {

  state = {
    username: '',
    password: '',
    message: ''
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { username, password } = this.state;

    // console.log (`state before  `, this.state)

    login ( username , password ).then ( data => {
      console.log(`login data`, data)

      if (data.message) {
        this.setState({
          message: data.message,
          username: '',
          password: ''
        });

      } else {
        // successfully logged in
        // update the state for the parent component
        console.log(`before the setUser`)
        console.log(this.props)
        this.props.setUser(data);
        console.log(`after the setUser`)
        this.props.history.push('/');
      }
    });
  };


  render (){

    return (
      <div className="centerAuth container-fluid">
        <div className="loginLogo">
          <img
          src="../../Images/LightStGallenLogo.png"
          alt="St Gallen Logo"
          />

          <h1 >Get involed with your city</h1>
        </div>

        <Container>
          <div className="boxOn">
            <div>
              <p className="error">
                {this.state.message}
              </p>
            </div>

          <div className='containerButtons'>
  
                  <div className="emailButton button">
                    <img className = "iconImage"
                      src='../../Images/emailIcon.png'
                      alt= 'email icon'
                    />
                      <Link to = "/profile"> Continue with email </Link>
                  </div>
                  <hr></hr>
                  <div className="appleButton button">
                  <img className = "iconImage"
                      src='../../Images/appleIcon.png'
                      alt= 'email icon'
                    />
                    <Link to = "/"> Continue with Apple </Link>
                  </div>

                  <div className="facebookButton button">
                  <img className = "iconImage"
                      src='../../Images/fbIcon.png'
                      alt= 'email icon'
                    />
                    <Link to = "/"> Continue with Facebook </Link>
                  </div>
  
              
          </div>

           {/* Login mocked for PoC */}
            {/* <Form onSubmit={this.handleSubmit}>
              <Form.Group>
                <Form.Label htmlFor='username'>Username: </Form.Label>
                <Form.Control 
                  size="lg"
                  type = "text"
                  name = "username"
                  id = "username"
                  value = {this.state.username}
                  onChange = {this.handleChange}
                />
              </Form.Group>
    
              <Form.Group>
                <Form.Label htmlFor="password">Password </Form.Label>
                    <Form.Control 
                        size="lg"
                        type = "password"
                        name = "password"
                        id = "password"
                        value = {this.state.password}
                        onChange = {this.handleChange}
                    />  
                </Form.Group>
    
                <Button variant="primary" type='submit'>Login</Button>
    
            </Form> */}
            
          </div>
        </Container>

        <div className="loginBottomImage">
              <img
                src='../../Images/CityOutline.png'
                alt="Silhouette of a city skyline"
              />
            </div>


            <div className="col signupLoginSwitch" style={{paddingBottom:"100px", paddingTop:"100px"}}>
              Need to create an account?  <Link to = "/signup">Sign up</Link>
            </div>            
        
    
      </div>
    )
  }
}
