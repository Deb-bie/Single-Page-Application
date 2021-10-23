import React from 'react';
import "./Discovery.css";
import icon from "../../images/car.svg";
import jpeg from "../../images/1.jpg";





function Discovery() {
    return (
        <div className="discovery-container" id="discovery">
            <h1 className="discovery-h1">
                Various Discoveries
            </h1>

            <div className="discovery-wrapper">

                <div className="discovery-card">
                    <img className="discovery-icon" src={icon} />
                    <h2 className="discovery-h2">Reduce expenses</h2>
                    <p className="discovery-p">
                        We help reduce your fees and overall stress
                    </p>
                </div>


                <div className="discovery-card">
                    <img className="discovery-icon" src={jpeg} />
                    <div className="discovery-h2">Reduce expenses</div>
                    <div className="discovery-p">
                        We help reduce your fees and overall stress
                    </div>
                </div>


                <div className="discovery-card">
                    <img className="discovery-icon" src={icon} />
                    <div className="discovery-h2">Reduce expenses</div>
                    <div className="discovery-p">
                        We help reduce your fees and overall stress
                    </div>
                </div> 

            </div>
        </div>
    )
}

export default Discovery
