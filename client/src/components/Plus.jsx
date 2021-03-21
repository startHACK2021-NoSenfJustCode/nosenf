import React, { Component } from 'react'
import './user/userprofile.css'
import { Form, Button, Alert, Container } from 'react-bootstrap';
// import axios from "axios";
import '../styles/Plus.css';

export default class Plus extends Component {

    state = {
        title: '',
        description: '',
        message:''
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
    
        this.setState({
          message:`Proposal submitted!`
        })

        // console.log(this.state.message)
        
        //Post to mongo mocked only
        // const { title, description} = this.state;
        
        
        // axios.post("/api/proposals", {    
        //   title:title,
        //   description: description,
        // })
          

        //   .then( (event) => {
        //     console.log('message:`Proposal submitted!`')
        //     console.log(event.data , "fetch event")
        //     this.props.refreshData();
        //     this.setState({
        //       message:`Proposal submitted!`
        //     })
        //   }).catch( err => {
        //     console.log(err);
        //  })

      }; //handleSubmit end
      

    render() {
      if (this.state.message.length <5) return (
        <div>
        <div className="userAllContainer">
        
            <div className="userBox Wide">
                <p>
                    {this.state.message}
                </p>

                <h1>Submit your project proposal!</h1>

                <div className="proposalText">
                  You can find details on the entire process <a className="externalLink" href="https://daten.stadt.sg.ch/pages/home0/">here</a>
                </div>    

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
                        <Form.Label htmlFor="description">Description </Form.Label>
                          <Form.Control as="textarea" rows={3}
                              type="text"
                              height="20px"
                              name="description"
                              id="description"
                              value={this.state.description}
                              onChange={this.handleChange}
                            />
                        </Form.Group>

                        <div className="formImage">
                            <Form.Group >
                                <Form.Label hmtlFor="image" >Upload an image
                                  <img
                                    src='../../Images/Cameracamera.png'
                                    alt='camera icon'
                                    classname="formImage"
                                  />
                                </Form.Label>
                            </Form.Group> 
                        </div>

                        <div className="offsetBottom">
                          <Button type='submit' className="button redGradientButton Wide ">
                              Add your event!
                          </Button>
                        </div>
                </Form>

                  </div>
              </div>
          </div>
)
      else return (
        <div className="userAllContainer">
          <div className="userBox Wide LargeSquare">
            <h1>
              {this.state.message}
            </h1>
          </div>
        </div>
      )
        
    }
}


//For image upload
  //   <Form.Control 
  //     type="file"
  //     name="image"
  //     id="image" */}
  //     // onChange={this.handleFileUpload}
  //     // class="profileImageUpload"
  //   />