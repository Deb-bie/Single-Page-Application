import React, { useState } from 'react';
import './Navbar.css';
import { Link as LinkR } from "react-router-dom";
import {FaBars, FaTimes} from 'react-icons/fa';
import {MdFingerprint } from 'react-icons/md';


function Navbar() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click)




    return (
        <nav className="navbar">
            <div className="navbar-container">
                <LinkR to='/' className="navbar-logo">
                    Zubi
                    <MdFingerprint />
                </LinkR>

                <div className="navbar-icon" onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </div>

                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <LinkR exact to='/' activeClass="active" className="nav-link" onClick={handleClick}>
                            Home
                        </LinkR>
                    </li>

                    <li className="nav-item">
                        <LinkR exact to='/about' activeClass="active" className="nav-link" onClick={handleClick} >
                            About
                        </LinkR>
                    </li>

                    <li className="nav-item">
                        <LinkR exact to='/services' activeClass="active" className="nav-link" onClick={handleClick}>
                            Services
                        </LinkR>
                    </li>

                    <li className="nav-item">
                        <LinkR exact to='/signin' activeClass="active" className="nav-link" onClick={handleClick} >
                            Sign In
                        </LinkR>
                    </li>
                </ul>

                <div className={click ? "nav-button active" : "nav-button"}>
                    <LinkR className="nav-btn-link" >Sign Up</LinkR>
                </div>

            </div>

        </nav>

    )
}

export default Navbar
