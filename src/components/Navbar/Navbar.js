import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS, animateScroll as scroll } from "react-scroll";
import {FaBars, FaTimes} from 'react-icons/fa';
import {MdFingerprint } from 'react-icons/md';

import { IconContext } from "react-icons/lib";

import Hero from '../pages/Hero/Hero';
import About from '../About/About';
import Services from '../pages/Services/Services';
import Discovery from '../pages/Discovery/Discovery';
import Footer from '../pages/Footer/Footer';




function Navbar() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >=80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);


    const toggleHome = () => {
        scroll.scrollToTop();
    }




    return (
        <>

        {/* <IconContext.Provider value={{ color: '#fff'}}> */}


        <nav className="navbar" scrollNav={scrollNav }>
            <div className="navbar-container">
                <LinkS to='home' className="navbar-logo" onClick={toggleHome}>
                    Zubi
                    <MdFingerprint />
                </LinkS>

                <div className="navbar-icon" onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </div>

                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <LinkS to='home' 
                        activeClass="active" 
                        className="nav-link" onClick={handleClick}>
                            Home
                        </LinkS>
                    </li>

                    <li className="nav-item">
                        <LinkS exact to='about' 
                        activeClass="active" className="nav-link" onClick={handleClick} 
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        exact='true' 
                        offset={-80}

                        >
                            About
                        </LinkS>
                    </li>

                    <li className="nav-item">
                        <LinkS exact to='services' activeClass="active" className="nav-link" onClick={handleClick} 
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        exact='true' 
                        offset={-80} >
                            Services
                        </LinkS>
                    </li>

                    <li className="nav-item">
                        <LinkS exact to='discovery' activeClass="active" className="nav-link" onClick={handleClick} 
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        exact='true' 
                        offset={-80} >
                            Discovery
                        </LinkS>
                    </li>
                </ul>

                <div className={click ? "nav-button active" : "nav-button"}>
                    <LinkR to="/signup" className="nav-btn-link" >Sign Up</LinkR>
                </div>

            </div>

        </nav>

        {/* </IconContext.Provider> */}

        <Hero />
        <About />
        <Services />
        <Discovery />
        <Footer />


        </>

    )
}

export default Navbar
