import Map from "../images/Map.svg";
import Graph from "../images/RGraph.svg";

function Dashboard() {
    return (
        <div>
            <div className="row mb-5">
                <div className="col-sm-1"></div>
                <div className="col-sm-10 text-center">
                    <div className="card Hcard">
                        <div className="card-body">
                            <div className="row">
                                <img className="img-fluid"src={Graph} alt="graph"></img>
                            </div>
                            <span className="Hbutton btn">SHOW ME MORE</span>
                        </div>
                    </div>
                </div>
                <div className="col-sm-1"></div>
            </div>

            <div className="row">
                <div className="col-sm-1"></div>
                <div className="col-sm-10 text-center">
                    <div className="card-body Hcard" style={{ padding: "0px 0px 0px 0px", marginBottom: "20px" }} id="budget">
                        <img className="img-fluid" src={Map} alt="map"></img>
                    </div>
                </div>
                <div className="col-sm-1"></div>
            </div>
        </div>


    )
}


export default Dashboard;