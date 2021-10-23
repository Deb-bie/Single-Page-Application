import React from 'react';
import "./About.css";
import { Link } from 'react-scroll';
import car from "../images/1.jpg";




function About() {
    return (
        <div className="info-container" id="about">
            <div className="info-wrapper">
                <div className="info-row">

                    <div className="column1">
                        <div className="text-wrapper">
                            <p className="top-line">Premium Bank</p>
                            <h1 className="heading">Unlimited Transactions with zero fees</h1>
                            <p className="sub-title">Get access to our exclusive app that allows you to send 
                                                        unlimited transactions without getting charged any fees.</p>
                            <div className="btn-wrap">
                                <Link to="home" 
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                        
                                className="about-btn">Sign Up</Link>
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

export default About
