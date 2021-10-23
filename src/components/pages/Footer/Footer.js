import React from 'react';
import { Link as LinkS } from 'react-scroll';
import { Link, Link as LinkR } from 'react-router-dom';
import './footer.css';
import {FaFacebook, FaTwitter, FaInstagram, FaYoutube,FaLinkedinIn } from 'react-icons/fa'




function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-wrap">
                <div className="footer-links-container">
                    <div className="footer-links-wrapper">
                        <div className="footer-link-items">
                            <h1 className="footer-link-title">About us</h1>
                                <LinkR className="footer-link" to="/signup">How it works</LinkR>
                                <LinkR className="footer-link" to="/signin">Testimonials</LinkR>
                                <LinkR className="footer-link" to="/signin">Careers</LinkR>
                                <LinkR className="footer-link" to="/signin">Investors</LinkR>
                                <LinkR className="footer-link" to="/signin">Terms of service</LinkR>
                        </div>     


                        <div className="footer-link-items">
                            <div className="footer-link-title">About us</div>
                                <LinkR className="footer-link" to="/signin">How it works</LinkR>
                                <LinkR className="footer-link" to="/signin">Testimonials</LinkR>
                                <LinkR className="footer-link" to="/signin">Careers</LinkR>
                                <LinkR className="footer-link" to="/signin">Investors</LinkR>
                                <LinkR className="footer-link" to="/signin">Terms of service</LinkR>
                        </div>                      
                    </div>



                    <div className="footer-links-wrapper">
                        <div className="footer-link-items">
                            <div className="footer-link-title">About us</div>
                                <LinkR className="footer-link" to="/signin">How it works</LinkR>
                                <LinkR className="footer-link" to="/signin">Testimonials</LinkR>
                                <LinkR className="footer-link" to="/signin">Careers</LinkR>
                                <LinkR className="footer-link" to="/signin">Investors</LinkR>
                                <LinkR className="footer-link" to="/signin">Terms of service</LinkR>
                        </div>     


                        <div className="footer-link-items">
                            <div className="footer-link-title">About us</div>
                                <LinkR className="footer-link" to="/signin">How it works</LinkR>
                                <LinkR className="footer-link" to="/signin">Testimonials</LinkR>
                                <LinkR className="footer-link" to="/signin">Careers</LinkR>
                                <LinkR className="footer-link" to="/signin">Investors</LinkR>
                                <LinkR className="footer-link" to="/signin">Terms of service</LinkR>
                        </div>                      
                    </div>
                </div>

                <section className="social-media">
                    <div className="social-media-wrap">
                        <LinkS to='home' className="social-logo">Zubi</LinkS>
                        <small className="website-rights">{new Date().getFullYear()} All rights reserved.</small>
                        <div className="social-icons">
                            <LinkR to='/' target="_blank" aria-label="Facebook" className="social-icon-link">
                                <FaFacebook />
                            </LinkR>

                            <LinkR to='/' target="_blank" aria-label="Instagram" className="social-icon-link">
                                <FaInstagram />
                            </LinkR>

                            <LinkR to='/' target="_blank" aria-label="Youtube" className="social-icon-link">
                                <FaYoutube />
                            </LinkR>

                            <LinkR to='/' target="_blank" aria-label="Twitter" className="social-icon-link">
                                <FaTwitter />
                            </LinkR>

                            <LinkR to='/' target="_blank" aria-label="Linkedin" className="social-icon-link">
                                <FaLinkedinIn/>
                            </LinkR>
                        </div>
                    </div>
                </section>




            </div>
        </footer>
    )
}

export default Footer
