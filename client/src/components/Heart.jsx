import React from 'react'
import './user/userprofile.css'
// import '../styles/button.css'
// import '../styles/Plus.css';
// import ProgressBar from 'react-bootstrap/ProgressBar';
import { Form, Button, Alert, Container, ProgressBar, Tab, Tabs } from 'react-bootstrap';

let barMin = 34000;
let barMax = 56000;
let friendCount= 5;
let totalCount = 100;
let fundingDeadline = `22 Jul 2021`


function Heart() {

    let now = barMin/barMax ;
 

    return (
        <div>
            <div className="userAllContainer">
        
                <div className="userBox Wide Heart backgroundMapImage">
                    <h1>Kindergarten Rotmonten</h1>
                    <img
                        src='../../Images/placelocationPin.png'
                        alt='pin icon'
                    />
                    <p className="leftAlign">{barMin} of {barMax} funded</p>
                    <div className="progressBar progress-bar">
                        
                        <ProgressBar  
                            now = {now}
                            max = {1}   
                            min = {0} 
                        />
                        
                    </div>
                    <div className="Heart leftAlign">
                      
                        <img
                            src='../../Images/UnionfriendsIcon.png'
                            alt='friend icon'
                        /> {friendCount} have friends supported this project
                    </div>
                    
                    <div className="dateBoxContainer">
                        <div className="dateBox">
                            Deadline For Funding
                            <br/>{fundingDeadline}
                        </div>                        
                        
                        <div className="dateBox">
                            Project Planned Start :
                            <br/>1 Oct 2021
                        </div>
                        
                        <div className="dateBox">
                            Project Planned End : 
                            <br/> 1 Nov 2021
                        </div>

                    </div>


                    <div className="tabs nav-link nav-tabs" >
                        <Tabs fill variant="tabs" defaultActiveKey="deadline" id="heartDetail">

                                <Tab eventKey="details" title="Project Details">
                                <br/>
                                    <p className="tabText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo repellat nemo earum officia voluptates praesentium harum magni reprehenderit officiis inventore fugit eius iusto atque quo culpa, excepturi accusantium unde dolorem.</p>
                                </Tab>
                          
                        </Tabs>
                    </div>
                    
                </div>


            </div>



        </div> //end return
    );
}

export default Heart;
