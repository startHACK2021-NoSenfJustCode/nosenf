import React, { Component } from 'react'
import './user/userprofile.css'
import { Form, Button, Alert, Container } from 'react-bootstrap';
import axios from "axios";

export default class Plus extends Component {

    state = {
        title: '',
        description: '',
    }
    
      handleChange = (event) => {
        const {name, value} = event.target;
        
        console.log(value);
        this.setState ({
          [name]: value
        });
      };
    
    //   handleFileUpload = e => {
    //     console.log("The file to be uploaded is: ", e.target.files[0]);
    //     this.setState({
    //       imageSelected: true
    //     });
    //     const uploadData = new FormData();
    //     uploadData.append("image", e.target.files[0]);
    //     console.log("THIS IS THE UPLOAD DATA", uploadData)
    //     service.handleUpload(uploadData)
    //       .then(response => {
    //         console.log(response)
    //         const image = response.secure_url;
    //         const publicID = response.public_id;
    //         console.log('res from handleupload: ', response.secure_url);
    //         this.setState({ image: image, imagePublicID: publicID });
    //         console.log('new state: ', this.state.image);
    //         // check if the form already got submitted and only waits for the image upload
    //         if (this.state.submitted === true) {
    //           this.handleSubmit();
    //         }
    //       })
    //       .catch(err => {
    //         this.setState({
    //           imageSelected: false
    //         });
    //         console.log("Error while uploading the file: ", err);
    //       });
    //   }
    
      handleSubmit = (event) => {
        event.preventDefault ();
    
        console.log("submit");
          
        const { title, description} = this.state;
        
        
        axios.post("/api/proposals", {    
          title:title,
          description: description,
        })
          .then( (event) => {
            console.log(event.data , "fetch event")
            this.props.refreshData();
            this.setState({
              message:`Proposal submitted!`
            })
          }).catch( err => {
            console.log(err);
         })

      }; //handleSubmit end
      

    render() {
        return (
            <div>
                <div className="userAllContainer">
                
                    <div className="userBox Wide">

                        <p className="error">
                            {this.state.message}
                        </p>

                        <h1>Add a new project proposal!</h1>

                        <p>You can find details on the entire process <a href="https://daten.stadt.sg.ch/pages/home0/">here</a></p>    

                        <Form onSubmit={this.handleSubmit}> 
                            <Form.Group>
                                <Form.Label htmlFor='username'>Project Name: </Form.Label>
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
                                <Form.Label htmlFor="password">Description </Form.Label>
                                    <Form.Control 
                                        size="lg"
                                        type = "password"
                                        name = "password"
                                        id = "password"
                                        value = {this.state.password}
                                        onChange = {this.handleChange}
                                    />  
                                </Form.Group>

                                <Button type='submit'> 
                                    Add your event! 
                                </Button>
                        </Form>

                    </div>
                </div>
            </div>
        )
    }
}
