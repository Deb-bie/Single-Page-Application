import React from 'react';
import { Link } from 'react-router-dom';
import './signup.css'




function SignUp() {
    return (
        <div className="signup-container">
            <div className="form-wrap">
                <Link className="icon" to='/'>Zubi</Link>

                <div className="form-content">
                    <form action="#" className="form">
                        <h1 className="form-h1">Sign up for free</h1>
                        <label className="form-label" htmlFor="for">Email</label>
                        <input className="form-input" type='email' required />
                        <label className="form-label" htmlFor="for">Password</label>
                        <input className="form-input" type='password' required />
                        <button type='submit'>Continue</button>
                        <span>Forgot Password</span>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default SignUp




