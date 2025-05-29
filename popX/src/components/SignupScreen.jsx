import Profile from "./Profile";
import React from "react";
import '../styles/Signup.css';
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

function SignupScreen(){

    let nav = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        nav('/profile');
    }
    return (<div className="container">
            <div className="signup-container">
                <h2 className="signup-text">Create your PopX account</h2>
                <form onSubmit={handleSubmit}>
                    <div className="signup-group">
                        <label htmlFor="name">Full Name<span>*</span></label>
                        <input 
                            type="text"
                            id="name"
                            placeholder="Enter full name"
                            className="form-inputs"
                            autoComplete="off" 
                            required
                            />
                    </div>

                    <div className="signup-group">
                        <label htmlFor="email">Email Address<span>*</span></label>
                        <input 
                            type="email"
                            id="email"
                            placeholder="Enter email address"
                            className="form-inputs"
                            autoComplete="off" 
                            required/>
                    </div>

                    <div className="signup-group">
                        <label htmlFor="phone">Phone number<span>*</span></label>
                        <input 
                            type="number"
                            id="phone"
                            placeholder="Enter phone number"
                            className="form-inputs"  
                            autoComplete="off" 
                            required/>
                    </div>

                    <div className="signup-group">
                        <label htmlFor="pass">Password<span>*</span></label>
                        <input 
                            type="password"
                            id="pass"
                            placeholder="Enter password"
                            className="form-inputs" 
                            autoComplete="off"  
                            required/>
                    </div>

                    <div className="signup-group">
                        <label htmlFor="company">Company name<span>*</span></label>
                        <input 
                            type="text"
                            id="company"
                            placeholder="Company name"
                            className="form-inputs"
                            autoComplete="off"   
                            required/>
                    </div>

                    <div className="radio-group">
                        <p>Are you an agency?<span>*</span></p>
                        <label htmlFor="radio-yes">
                            <input 
                                type="radio"
                                id="radio-yes"
                                name="agency"
                                className="form-inputs-radio" 
                                autoComplete="off"
                                required
                            />
                                Yes
                        </label>
                        <label htmlFor="radio-no">
                            <input 
                                type="radio"
                                id="radio-no"
                                name="agency"
                                className="form-inputs"
                                autoComplete="off"
                                required
                            />
                                No
                        </label>
                    </div>

                    <div className="btn-group">
                        <button type="submit" className="signup-btn">
                            Create Account
                        </button>
                    </div>  
                </form>
            </div>
        </div>
    );
}

export default SignupScreen;