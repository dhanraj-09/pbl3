import React, { useState } from 'react';
import './SignUp.css';
import {registerStudent} from "../../api/api.js";
import {useNavigate} from "react-router-dom";



const Signup = () => {

    const navigate = useNavigate();

    const [studentData, setStudentData] = useState({
        name: '', registration_no: '', degree: '', branch: '',
        year: '', gender: '', dob: '', linked_in: '', github: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setStudentData(prev => ({ ...prev, [name]: value }));
    };





    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await registerStudent(studentData);
            if (response.status === 200 || response.status === 201) {
                alert(`Success: ${response.data.message}`);
                sessionStorage.setItem("studentSessionID", studentData.registration_no);
                navigate('/dashboard');
            }
            setStudentData({
                name: '', registration_no: '', degree: '', branch: '',
                year: '', gender: '', dob: '', linked_in: '', github: ''
            });
        } catch (error) {
            console.error('Fetch error:', error);
            alert('Network error. Is your backend server running?');
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-card">
                <div className="signup-header">
                    <h1 className="signup-title">New Student Signup</h1>
                    <p className="signup-subtitle">Fill in your details to create your alumni database profile.</p>
                </div>

                <form onSubmit={handleSubmit} className="signup-form">
                    <div className="form-group full-width">
                        <label>Full Name *</label>
                        <input type="text" name="name" value={studentData.name} onChange={handleInputChange} placeholder="e.g. John Doe" required />
                    </div>

                    <div className="form-group">
                        <label>Registration Number * (Unique)</label>
                        <input type="text" name="registration_no" value={studentData.registration_no} onChange={handleInputChange} placeholder="12345678" required />
                    </div>

                    <div className="form-group">
                        <label>Degree Programme</label>
                        <select name="degree" value={studentData.degree} onChange={handleInputChange} required>
                            <option value="">Select Degree</option>
                            <option value="B.Tech">B.Tech</option>
                            <option value="M.Tech">M.Tech</option>
                            <option value="BCA">BCA</option>
                            <option value="MCA">MCA</option>
                            <option value="BBA">BBA</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Branch / Specialization</label>
                        <input type="text" name="branch" value={studentData.branch} onChange={handleInputChange} placeholder="e.g. Computer Science" />
                    </div>

                    <div className="form-group">
                        <label>Admission Year</label>
                        <input type="number" name="year" value={studentData.year} onChange={handleInputChange} placeholder="YYYY" />
                    </div>

                    <div className="form-group">
                        <label>Gender</label>
                        <select name="gender" value={studentData.gender} onChange={handleInputChange} required>
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Date of Birth *</label>
                        <input type="date" name="dob" value={studentData.dob} onChange={handleInputChange} required />
                    </div>

                    <div className="form-group">
                        <label>LinkedIn Profile URL</label>
                        <input type="url" name="linked_in" value={studentData.linked_in} onChange={handleInputChange} placeholder="https://linkedin.com/in/username" />
                    </div>

                    <div className="form-group">
                        <label>GitHub Profile URL</label>
                        <input type="url" name="github" value={studentData.github} onChange={handleInputChange} placeholder="https://github.com/username" />
                    </div>

                    <button type="submit" className="submit-btn">Create Account</button>
                </form>
            </div>
        </div>
    );
}

export default Signup;