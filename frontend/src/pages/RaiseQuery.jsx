import React from 'react';
import './raisequery.css';
import {
    Home,
    FileText,
    MessageSquare,
    Users,
    Settings,
    Plus,
    Info
} from 'lucide-react';

const RaiseQuery = () => {
    const queries = [
        { subject: "Lorem ipsum dolor", category: "Technical" },
        { subject: "Lorem ipsum dolor", category: "Research" },
        { subject: "Lorem ipsum dolor", category: "Meeting" }
    ];

    return (
        <div className="query-page">
            {/* Sidebar */}
            <aside className="sidebar">
                <h1 className="logo">MARG</h1>
                <nav className="nav-menu">
                    <div className="nav-item">
                        <Home size={20} /> <span>HOME</span>
                    </div>
                    <div className="nav-item active">
                        <FileText size={20} /> <span>Raise a Querry</span>
                    </div>
                    <div className="nav-item">
                        <MessageSquare size={20} /> <span>Chat</span>
                    </div>
                    <div className="nav-item">
                        <Users size={20} /> <span>Community</span>
                    </div>
                    <div className="nav-item settings">
                        <Settings size={20} /> <span>Settings</span>
                    </div>
                </nav>
                <div className="logout-link">logout</div>
            </aside>

            {/* Main Content */}
            <main className="main-content">
                <header className="query-header">
                    <h2 className="title-link">Raise a Query</h2>
                    <div className="info-icon"><Info size={24} /></div>
                </header>

                <div className="mentor-section">
                    <div className="mentor-info-wrapper">
                        <div className="mentor-avatar">
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400" alt="Mentor" />
                        </div>
                        <div className="mentor-details">
                            <h3>mentor name</h3>
                            <p>mentor info</p>
                        </div>
                    </div>
                    <div className="add-new">
                        <div className="plus-box">
                            <Plus size={32} strokeWidth={1} />
                        </div>
                        <span>Add New</span>
                    </div>
                </div>

                <div className="query-list">
                    {queries.map((q, index) => (
                        <div key={index} className="query-card">
                            <p className="query-subject"><strong>subject:</strong> {q.subject}</p>
                            <p className="query-category"><strong>category:</strong> {q.category}</p>
                            <p className="query-body">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisque faucibus ex
                                sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis
                            </p>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default RaiseQuery;