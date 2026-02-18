import React from 'react';
import './teacherprofile.css';
import { Linkedin, Mail, ChevronDown } from 'lucide-react';

const TeacherProfile = () => {
    const sections = [
        "Educational Qualification",
        "Area of Expertise",
        "Responsibility",
        "Publication"
    ];

    return (
        <div className="profile-page">
            <div className="container">

                {/* Header Profile Card */}
                <header className="header-card">
                    <div className="avatar-section">
                        <div className="profile-img-wrapper">
                            <img
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400"
                                alt="Professor"
                            />
                        </div>
                    </div>

                    <div className="info-section">
                        <h1 className="name">XYZ</h1>
                        <hr className="divider" />
                        <div className="title-group">
                            <p className="role">Professor</p>
                            <p className="department">Department of Information Technology</p>
                        </div>

                        <div className="contact-pills">
                            <div className="pill">aditya.dhanraj@gmail.com</div>
                            <div className="pill">Contact info</div>
                        </div>

                        <div className="social-links">
                            <div className="social-icon">
                                <Linkedin size={20} />
                            </div>
                            <div className="social-icon">
                                {/* Simplified Outlook-style icon representation */}
                                <Mail size={20} />
                            </div>
                        </div>
                    </div>
                </header>

                {/* Accordion List Section */}
                <section className="accordion-list">
                    {sections.map((title, index) => (
                        <div key={index} className="accordion-item">
                            <span>{title}</span>
                            <ChevronDown size={20} className="chevron" />
                        </div>
                    ))}
                </section>

            </div>
        </div>
    );
};

export default TeacherProfile;