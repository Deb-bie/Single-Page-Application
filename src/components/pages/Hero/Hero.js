import React, { useState } from 'react';
import video from '../../videos/video.mp4';
import "./Hero.css";
import { FaArrowRight } from 'react-icons/fa';
import { MdArrowForward } from 'react-icons/md';
import { Link as LinkR} from "react-router-dom";



function Hero() {

    const [hover, setHover] = useState(false);

    const handleHover = () => {setHover(!hover)};


    return (
        <div className="main-container" id="home">
            <div className="main-background">
                <video className="video-background" autoPlay loop muted src={video} typeof="video/mp4"></video>
            </div>


            <div className="main-content">
                <h1 className="title">
                    Virtual Banking Made Easy
                </h1>

                <p className="p">
                    Sign up for a new account today and receive $250 in credit towards 
                    your next payment.
                </p>

                <div className="hero-btn">
                    <LinkR className="button" to="signup" onMouseEnter={handleHover} onMouseLeave={handleHover}>
                        Get Started &nbsp; &nbsp; 
                        {hover ? <MdArrowForward /> : <FaArrowRight />}
                    </LinkR>
                </div>
            </div>
            
        </div>
    )
}

export default Hero



































































































