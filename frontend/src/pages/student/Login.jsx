import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './login.css';

const Login = () => {
    const [registrationNo, setRegistrationNo] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();


        if (registrationNo.trim() !== "") {
            // Save the registration number to the session to "log them in" //This is wrong we should save the session id after we check from the backend.
            sessionStorage.setItem('studentSessionID', registrationNo);
            console.log(sessionStorage.getItem('studentSessionID'));
            navigate('/dashboard');
        } else {
            alert("Please enter a valid Registration Number.");
        }
    };

    return (
        <div className="login-wrapper">
            <div className="login-banner">
                <div className="banner-content">
                    <div className="brand-logo">M</div>
                    <h1 className="banner-title">MARG Dashak</h1>
                    <p className="banner-text">
                        Your central hub to connect, resolve queries, and manage your academic profile.
                    </p>
                    <img
                        src="https://illustrations.popsy.co/orange/student-going-to-school.svg"
                        alt="Student"
                        className="banner-image"
                    />
                </div>
            </div>

            <div className="login-form-section">
                <div className="login-card">
                    <h2 className="greeting">Welcome Back! 👋</h2>
                    <p className="instruction">Enter your Registration Number to continue to your dashboard.</p>

                    <form onSubmit={handleLogin} className="pure-login-form">
                        <div className="single-input-group">
                            <label htmlFor="regNo">Registration Number</label>
                            <input
                                type="text"
                                id="regNo"
                                placeholder="e.g. 23FE10ITE00xxx"
                                value={registrationNo}
                                onChange={(e) => setRegistrationNo(e.target.value)}
                                required
                                autoFocus
                            />
                        </div>

                        <button type="submit" className="action-button">Access Dashboard</button>
                    </form>

                    <div className="divider">
                        <span>or</span>
                    </div>

                    <p className="redirect-text">
                        New student? <Link to="/register" className="orange-link">Create your profile</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;