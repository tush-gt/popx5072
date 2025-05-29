import Profile from "./Profile";
import React from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import '../styles/Login.css';

function LoginScreen(){
    let nav = useNavigate();
    const handleSubmit = (e)=>{
        e.preventDefault();
        nav('/profile');
    }

    return (
        <>
            <div className="container">
                <div className="login-container">
                    <div className="texts">
                    <h1 className="header-bold">Signin to your PopX account</h1>
                    <h4 className="semi-light">Lorem ipsum dolor sit amet,  consectetur <br/>adipisicing elit.</h4>
                    </div>

                    <form onSubmit={handleSubmit} className="login-form">
                        <div className="form-group">
                            <label htmlFor="email">Email Address<span>*</span></label>
                            <input 
                                type="email"
                                id="email"
                                placeholder="Enter email address"
                                className="form-inputs" 
                                autoComplete="off"
                                required
                                autoFocus
                                />
                        </div>

                        <div className="form-group">
                            <label htmlFor="pass">Password<span>*</span></label>
                            <input 
                                type="password"
                                id="pass"
                                placeholder="Enter password"
                                className="form-inputs" 
                                autoComplete="off"
                                required
                                autoFocus
                                />
                        </div>

                        <div className="btn-group">
                            <button type="submit" className="login-btn">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default LoginScreen;