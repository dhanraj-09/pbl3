import React from 'react';
import './newqueryform.css';
import {
    Home,
    FileText,
    MessageSquare,
    Users,
    Settings,
    Info,
    Paperclip
} from 'lucide-react';

const NewQueryForm = () => {
    return (
        <div className="query-form-page">
            {/* Main Content */}
            <main className="main-content">
                <header className="header-row">
                    <h2 className="page-title">Raise a Query</h2>
                    <div className="info-icon"><Info size={24} /></div>
                </header>

                <div className="mentor-header">
                    <div className="mentor-avatar">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400" alt="Mentor" />
                    </div>
                    <div className="mentor-info">
                        <h3>mentor name</h3>
                        <p className="mentor-link">mentor info</p>
                    </div>
                </div>

                {/* Form Container */}
                <div className="form-card">
                    <form>
                        <div className="input-group">
                            <label>Catagory</label>
                            <input type="text" placeholder="Enter text here..." />
                        </div>

                        <div className="input-group">
                            <label>Sub Category</label>
                            <input type="text" placeholder="Enter text here..." />
                        </div>

                        <div className="input-group">
                            <label>Subject</label>
                            <input type="text" placeholder="Enter text here..." />
                        </div>

                        <div className="input-group">
                            <label>Description</label>
                            <div className="textarea-wrapper">
                                <textarea placeholder="Enter text here..."></textarea>
                                <div className="attachment-icon">
                                    <Paperclip size={18} />
                                </div>
                            </div>
                        </div>

                        <button type="submit" className="submit-btn">Submit</button>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default NewQueryForm;