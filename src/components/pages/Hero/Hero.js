import React from 'react';
import video from '../../videos/video.mp4';
import "./Hero.css"



function Hero() {
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

                <div className="button">
                    <button>
                        Get Started
                    </button>
                </div>
            </div>
            
        </div>
    )
}

export default Hero



































































































