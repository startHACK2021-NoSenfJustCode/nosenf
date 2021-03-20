import React, { Component } from 'react';
import './userprofile.css';
import '../../components/button.css';

export default class Userprofile extends Component {
    render() {
        return (
            <div>
                {/* profile! */}

                <div className="userAllContainer">
                    
                    <div className="userDetailsContainer">

                        <div className="userBox Small">
                            <h1>Voting Hero</h1>
                            <img
                                src="../../Images/UnionmedalIcon.png"
                                alt="medal icon"
                            />
                            <p className="userButton button">
                                87 Votes
                            </p>
                        </div>
                        <div className="userBox Small">
                            <h1>7 Friends</h1>
                            <img
                                src="../../Images/UnionfriendsIcon.png"
                                alt="friends icon"
                            />
                            <p className="userButton button redGradientButton">
                                Go To Friends
                            </p>
                        </div>
                        <div className="userBox Small">
                            <h1>Fundings</h1>
                            <img
                                src="../../Images/UnionawardsIcon.png"
                                alt="awards icon"
                            />
                            <p className="userButton button">
                                13 Projects
                            </p>
                        </div>
                        <div className="userBox Small">
                            <h1>Settings</h1>
                            <img
                                src="../../Images/settings-iconsettingsIcon.png"
                                alt="settings icon"
                            />
                            <p className="userButton button redGradientButton">
                                Change
                            </p>
                        </div>
                    </div>

                    <div className="userBox Wide">
                        <h1>Citizen vs Projects</h1>
                        <img
                            src="../../Images/diagramm.png"
                            alt="medal icon"
                        />
                    </div>
                </div>
            </div>
        )
    }
}
