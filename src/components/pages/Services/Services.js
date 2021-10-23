import React from 'react';
import "./Services.css";
import { Link } from 'react-scroll';
import car from "../../images/car.svg";




function Services() {
    return (
        <div className="services-container" id="services">
            <div className="services-wrapper">
                <div className="services-row">

                    <div className="column1">
                        <div className="text-wrapper">
                            <p className="top-line">Premium Bank</p>
                            <h1 className="services-heading">Unlimited Transactions with zero fees</h1>
                            <p className="services-sub-title">Get access to our exclusive app that allows you to send 
                                                        unlimited transactions without getting charged any fees.</p>
                            <div className="btn-wrap">
                                <Link to="home" 
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                        
                                className="services-btn">Sign Up</Link>
                            </div>
                        </div>
                    </div>

                    <div className="column2">
                        <div className="img-wrap">
                            <img src={car} alt="car" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services


