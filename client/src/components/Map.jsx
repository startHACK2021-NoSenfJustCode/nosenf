import PlaceIcon from "../images/PlaceIcon.png"

function Map() {
    return (
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
                            <p>The Kindergarten needs a new roof, the playground is not safe anymore and the heating needs to be replaced. </p>
                        </div>
                    </div>
                    <div className="Hcard" id="CardBottom">

                        <div className="row">
                            <span className="userButton button redGradientButton" >Save</span>
                        </div>
                    </div>
                </div>
                <div className="row bg-white">
                    <div className="col" width="300px">

                    </div>
                </div>
            </div>
            <div className="col-sm-1"></div>
        </div>


    );
}

export default Map;
