import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './teacherlogin.css';
import {registerFaculty} from "../../api/api.js";

const FacultyLogin = () => {
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();

    // States
    const [loginEmail, setLoginEmail] = useState('');
    const [signupData, setSignupData] = useState({
        name: '', email: '', designation: '', department: '',
        phone_number: '', linked_in: '', muj_page: ''
    });

    const handleLogin = (e) => {
        e.preventDefault();
        if (loginEmail.trim() !== '') {
            sessionStorage.setItem('facultySessionID', loginEmail);
            navigate('/faculty-dashboard'); // Redirect after login
        }
    };

    const handleSignup = async  (e) => {
        e.preventDefault();
        // Here you will eventually call your axios POST request
        if (signupData.email.trim() !== '') {
            sessionStorage.setItem('facultySessionID', signupData.email);
            const response = await registerFaculty(signupData);
            navigate('/faculty-dashboard'); // Redirect after signup
        }
    };

    const handleSignupChange = (e) => {
        setSignupData({ ...signupData, [e.target.name]: e.target.value });

    };

    return (
        <div className="auth-wrapper">
            <div className="auth-modal">
                <h1 className="brand-title" style={{textAlign: "center"}}></h1>

                {/* Toggle Buttons */}
                <div className="toggle-container">
                    <button className={`toggle-btn ${isLogin ? 'active' : ''}`} onClick={() => setIsLogin(true)}>Login</button>
                    <button className={`toggle-btn ${!isLogin ? 'active' : ''}`} onClick={() => setIsLogin(false)}>Register</button>
                </div>

                {/* Sliding Forms Container */}
                <div className="form-viewport">
                    <div className={`form-slider ${isLogin ? 'show-login' : 'show-signup'}`}>

                        {/* LOGIN FORM (Left Side) */}
                        <form className="auth-form" onSubmit={handleLogin}>
                            <h2>Faculty Login</h2>
                            <div className="input-group">
                                <label>Official Email</label>
                                <input type="email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} required />
                            </div>
                            <button type="submit" className="action-button mt-auto">Sign In</button>
                        </form>

                        {/* SIGNUP FORM (Right Side) */}
                        <form className="auth-form signup-form" onSubmit={handleSignup}>
                            <h2>Faculty Registration</h2>
                            <div className="scrollable-fields">
                                <div className="input-group">
                                    <label>Full Name</label>
                                    <input type="text" name="name" onChange={handleSignupChange} required />
                                </div>
                                <div className="input-group">
                                    <label>Official Email</label>
                                    <input type="email" name="email" onChange={handleSignupChange} required />
                                </div>
                                <div className="input-row">
                                    <div className="input-group">
                                        <label>Designation</label>
                                        <input type="text" name="designation" onChange={handleSignupChange} required />
                                    </div>
                                    <div className="input-group">
                                        <label>Department</label>
                                        <input type="text" name="department" onChange={handleSignupChange} required />
                                    </div>
                                </div>
                                <div className="input-group">
                                    <label>Phone Number</label>
                                    <input type="tel" name="phone_number" onChange={handleSignupChange} required />
                                </div>
                                <div className="input-group">
                                    <label>LinkedIn Profile URL</label>
                                    <input type="url" name="linked_in" onChange={handleSignupChange} />
                                </div>
                                <div className="input-group">
                                    <label>MUJ Profile Page URL</label>
                                    <input type="url" name="muj_page" onChange={handleSignupChange} />
                                </div>
                            </div>
                            <button type="submit" className="action-button">Create Account</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default FacultyLogin;