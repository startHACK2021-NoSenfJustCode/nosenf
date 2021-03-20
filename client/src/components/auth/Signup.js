import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { signup } from '../../services/auth'
// import './auth.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Form, Button, Alert, Container } from 'react-bootstrap';


export default class Signup extends Component {

    state = {
    username: '',
    password: '',
    message: '',
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { username, password} = this.state;

    signup(username, password).then ( data => {
      // console.log(`data`, data)
      if (data.message ) {
          // && (this.state.image || !this.state.imageSelected)
        this.setState({
          message: data.message,
          username: '',
          password: '',
        });
        
      } else {
        this.props.setUser(data);
        this.props.history.push('/'); //was to projects, now to signup?
      }
    });
  };


  render() {
    console.log(this.props)

    return (
      <div className="centerAuth">

        <Container>
          <div className="boxOn">

            <div>
              <h1>Create your account</h1>
            
              <p className="error">
                  {this.state.message}
              </p>
            </div>
    
    
            <Form onSubmit={this.handleSubmit}>
            <Form.Group>
                <Form.Label  htmlFor="username">Username </Form.Label>
                  <Form.Control 
                        type = "text"
                        name = "username"
                        id = "username"
                        value = {this.state.username}
                        onChange = {this.handleChange}
                    />
              </Form.Group>
    
    
              <Form.Group>
                <Form.Group htmlFor="password">Password </Form.Group>
                  <Form.Control 
                        type = "password"
                        name = "password"
                        id = "password"
                        value = {this.state.password}
                        onChange = {this.handleChange}
                    />  
                </Form.Group>
    
                <Form.Group>
                  <br />
                <div className="profileImageUpload">
                  <Form.Label  htmlFor="profileImage">Uplodad a Profile Picture? </Form.Label>
              
                      <div className="profileImageUploadContainer">
                        <Form.Control 
                            type = "file"
                            name = "profileImage"
                            id = "profileImage"
                            value = {this.state.profileImage}
                            onChange={this.handleFileUpload}
                            // className="profileImageUpload"
                        />  
                </div>
            </div>

                </Form.Group>          
              
              <Button type='submit' >
                Sign up 
              </Button>
            
            </Form>
              <div className="signupLoginSwitch">
                Already have an account <Link to = "/login">Login </Link>
              </div>
          </div>
        </Container>
      </div>
    )
  }
}