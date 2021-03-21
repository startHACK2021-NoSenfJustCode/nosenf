import React from 'react';
import { Link } from "react-router-dom";
import MapCost from "../images/svgs/MapCost.svg";
import MapCalendar from "../images/svgs/MapCalendar.svg";
import MapLike from "../images/svgs/MapLike.svg";
import Graph from "../images/svgs/RGraph.svg";
import PlaceIcon from "../images/PlaceIcon.png"

function Dashboard() {
    return (
        <div>
            <div className="row mb-5">
                <div className="col-sm-1"></div>
                <div className="col-sm-10 text-center">
                    <div className="BoxShadow Hcard">
                        <div className="card-title mt-2 ml-3 mr-3">
                            <h3>
                                Expenses of the city 2022
                                </h3>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <img className="img-fluid" src={Graph} alt="graph"></img>
                            </div>
                        </div>
                        <Link className="userButton button redGradientButton mt-3 mb-3" to='/map' >SHOW ME MORE</Link>
                    </div>
                </div>
                <div className="col-sm-1"></div>
            </div>

            <div className="row mb-5">
                <div className="col-sm-1"></div>
                <div className="col-sm-10 text-center">
                    <div className="BoxShadow Hcard SvgMap" >
                        <div className="card-title mt-2 mb-5 ml-3 mr-3">
                            <h3>
                                Kindergarten Rotmonten
                            </h3>
                        </div>
                        <div className="row card-body center-block">
                            <img src={PlaceIcon} alt="place" />
                        </div>
                        <div className="row mt-2">
                            <div className="col mr-4">
                                <img src={MapCost} alt="place" />
                            </div>
                            <div className="col mr-4">
                                <img src={MapCalendar} alt="place" />
                            </div>
                            <div className="col mr-4">
                                <img src={MapLike} alt="place" />
                            </div>
                        </div>
                        <Link className="userButton button redGradientButton mt-3 mb-3" to='/heart' >SET THE BUDGET</Link>
                    </div>
                </div>
                <div className="col-sm-1"></div>
            </div>

        </div >
    )
}


export default Dashboard;