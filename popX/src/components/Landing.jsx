import LoginScreen from "./LoginScreen";
import SignupScreen from "./SignupScreen";
import React from 'react';
import '../styles/Landing.css';
import { BrowserRouter, Route, Routes, useNavigate, Link } from 'react-router-dom';    


function Landing(){
    let nav = useNavigate();

    return (
        <div className="form-container">
            <div className="texts">
                <h2 className="header-bold">Welcome to PopX</h2>
                <h4 className="semi-light">Lorem ipsum dolor sit amet,  consectetur<br/>adipisicing elit.</h4>
            </div>
            <nav className="navbar">
                <div className="btn-group">
                    <Link to='/signup' className='nav-link1' >Create Account</Link>
                    <Link to='/login' className='nav-link2'>
                        Already registered? Login
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Landing;