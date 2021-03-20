import React, { Component } from 'react'

function Dashboard() {
    return (
        <div>
            <div className="row mb-5">
                <div className="col-sm-1"></div>
                <div className="col-sm-10 text-center">
                    <div className="card Hcard">
                        <div className="card-body">
                            <h5 className="card-title">Expenses of city 2022</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <span className="Hbutton btn">SHOW ME MORE</span>
                        </div>
                    </div>
                </div>
                <div className="col-sm-1"></div>
            </div>

            <div className="row">
                <div className="col-sm-1"></div>
                <div className="col-sm-10 text-center">
                    <div className="card Hcard">
                        <div className="card-body">
                            <h5 className="card-title">Expenses of city 2022</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <span className="Hbutton btn">SHOW ME MORE</span>
                        </div>
                    </div>
                </div>
                <div className="col-sm-1"></div>
            </div>
        </div>


    )
}


export default Dashboard;