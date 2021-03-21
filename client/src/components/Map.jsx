import React from 'react';
import PlaceIcon from "../images/PlaceIcon.png"
import Facebook from "../images/FacebookIcon.png";
import LinkedIn from "../images/LinkedInIcon.png";
import Instagram from "../images/InstagramIcon.png";
import Twitter from "../images/TwitterIcon.png";
import '../styles/slider.css';

const t1 = "The Kindergarten gets a new roof.."
const t2 = "The Kindergarten needs a new roof, the playground is not safe anymore and the heating needs to be replaced."
const t3 = "The Kindergarten needs a new roof, the playground is not safe anymore and the heating needs to be replaced. And the interior will be painted."


const checkValue = (value) => {
    if (value <= 200) {
        return (t1)
    } else if (value <= 400) {
        return (t2)
    } else {
        return (t3)
    }
}

class Map extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {
            value: 50,
            display: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.toggleMessage = this.toggleMessage.bind(this);
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    toggleMessage() {
        this.setState({ display: !this.state.display });
    }
    render() {
        const { value, display } = this.state
        return (
            <div>
                {!display && (
                    <div className="row">
                        <div className="col-sm-1"></div>
                        <div className="col-sm-10 text-center">
                            <div className="BoxShadow">
                                <div className=" Hcard SvgMap MapFade" >
                                    <div className="card-title mt-2 ml-3 mr-3">
                                        <h3>
                                            Kindergarten Rotmonten
                            </h3>
                                    </div>
                                    <div className="row card-body center-block mt-4 ml-3 mr-3">
                                        <img src={PlaceIcon} alt="place" />
                                    </div>
                                    <div className="row card-body text-justify ml-3 mr-3" style={{ paddingBottom: "40px", paddingTop: "0px" }}>
                                        <p>
                                            {checkValue(value)}
                                        </p>
                                    </div>
                                </div>
                                <div className="Hcard" id="CardBottom">
                                    <input
                                        id="typeinp"
                                        type="range"
                                        min="0" max="600"
                                        value={this.state.value}
                                        onChange={this.handleChange}
                                        step="1"
                                        className="slider" />

                                    <div className="row">
                                        <div className="col-4">
                                            1.5 Million
                                </div>
                                        <div className="col-4">
                                            2.0 Million
                                    </div>
                                        <div className="col-4">
                                            2.5 Million
                                    </div>
                                    </div>
                                    <span className="userButton button redGradientButton" onClick={this.toggleMessage} >Save</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-1"></div>
                    </div>
                )}
                {display && (
                    <div className="row">
                        <div className="col-sm-1"></div>
                        <div className="col-sm-10 text-center">
                            <div className="BoxShadow">
                                <div className=" Hcard SvgMap MapFade" >
                                    <div className="card-title mt-2 ml-3 mr-3">
                                        <h3>
                                            Kindergarten Rotmonten
                                    </h3>
                                    </div>
                                    <div className="row card-body center-block mt-4 ml-3 mr-3">
                                        <img src={PlaceIcon} alt="place" />
                                    </div>
                                    <div className="row card-body text-justify ml-3 mr-3" style={{ paddingBottom: "40px", paddingTop: "0px" }}>
                                        <p>
                                            Thank you great citizen of St. Gallen. You helped us use the budget wisely. You may now share go in freedom.
                                        </p>
                                    </div>
                                </div>
                                <div className="Hcard" id="CardBottom">
                                    <div className="row mt-2">
                                        <div className="col-3">
                                            <img src={Facebook} alt="facebook" />
                                        </div>
                                        <div className="col-3">
                                            <img src={Instagram} alt="instagram" />
                                        </div>
                                        <div className="col-3">
                                            <img src={LinkedIn} alt="linkedin" />
                                        </div>
                                        <div className="col-3">
                                            <img src={Twitter} alt="twitter" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-1"></div>
                    </div>

                )
                }
            </div>
        );
    }
}


export default Map;
