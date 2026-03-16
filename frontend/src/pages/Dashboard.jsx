import "./dashboard.css";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {getStudentData} from "../api/api.js";


function Home(props) {
    return null;
}

function FileText(props) {
    return null;
}

function MessageSquare(props) {
    return null;
}

function Users(props) {
    return null;
}

function Settings(props) {
    return null;
}

function Info(props) {
    return null;
}

function MessageCircle(props) {
    return null;
}

function Calendar(props) {
    return null;
}

function Bookmark(props) {
    return null;
}

const Dashboard = () =>
{

const [Student, setStudent] = useState(null);
const [loading, setLoading] = useState(true);
const navigate = useNavigate();
const [bgred, setBgred] = useState(false);

    useEffect(() => {
        const sessionID = sessionStorage.getItem("studentSessionID");
        console.log(`Session ID from dashboard: ${sessionID}`);
        if (!sessionID) {
            navigate("/register");
            return;
        }

        const loadProfile = async () => {
            try {
                const response = await getStudentData(sessionID);
                if (response.status === 200) {
                    setStudent(response.data);
                    console.log(Student);
                }
            } catch (error) {
                console.error('Failed to load dashboard data', error);
                if(error.response && error.response.status === 404) {
                    sessionStorage.removeItem("studentSessionID");
                    navigate("/");
                }
            } finally {
                setLoading(false);
            }

        }

        loadProfile().then(() => console.log("Dashboard data loaded successfully"));


    }, [navigate]);


    if (loading) {
        return <div style={{ padding: "50px", textAlign: "center" }}>Loading Profile...</div>;
    }

    if (!Student) {
        return <div style={{ padding: "50px", textAlign: "center" }}>Student not found. Please log in again.</div>;
    }

    return (
        <div className="dashboard-container">
            {/* Sidebar */}
            <aside className="sidebar">
                <h1 className="logo">MARG</h1>
                <nav className="nav-menu">
                    <div className="nav-item active">
                        <Home size={20} /> <span>Home</span>
                    </div>
                    <div className="nav-item">
                        <FileText size={20} /> <span>Raise a Querry</span>
                    </div>
                    <div className="nav-item">
                        <MessageSquare size={20} /> <span>Chat</span>
                    </div>
                    <div className="nav-item">
                        <Users size={20} /> <span>Community</span>
                    </div>
                    <div className={"nav-item"}>
                            <button className="btn-logout" onClick={() => {
                                sessionStorage.removeItem("studentSessionID");
                                navigate("/");
                            }}>Logout</button>
                    </div>
                    <div className="nav-item settings">
                        <Settings size={20} /> <span>Settings</span>
                    </div>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="main-content" style={{ backgroundColor: bgred ? "#ffe5e5" : "white" }}>
                <div className="info-icon">
                    <Info size={24} />
                </div>

                <div className="content-wrapper">
                    {/* Student Profile Card */}
                    <section className="profile-card">
                        <div className="profile-left">
                            <div className="avatar-circle">
                                <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400" alt="Student" />
                            </div>
                            <h2>{Student.name}</h2>
                        </div>

                        <div className="profile-right">
                            <div className="profile-header">
                                <div className="ids">
                                    <p>{Student.registration_no}</p>
                                    <p>outlook id</p>
                                </div>
                                <button className="btn-edit" onClick={()=>{ setBgred(true) }} >Edit Profile</button>
                            </div>
                            <div className="bio-strip">short bio</div>
                            <div className="placeholder-grid">
                                <span></span><span></span><span></span><span></span>
                            </div>
                            <div className="later-strip">stuff to add later</div>
                        </div>
                    </section>

                    {/* Bottom Section */}
                    <div className="bottom-grid">
                        {/* Faculty Card */}
                        <div className="faculty-card">
                            <div className="faculty-avatar">
                                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400" alt="Faculty" />
                            </div>
                            <div className="faculty-info">
                                <h3>faculty name</h3>
                                <p>Information technology</p>
                                <button className="btn-view">View Profile</button>
                            </div>
                            <div className="chat-bubble-icon">
                                <MessageSquare size={24} color="white" />
                            </div>
                        </div>

                        {/* Side Widgets */}
                        <div className="widgets-column">
                            <div className="widget">
                                <MessageCircle className="widget-icon" />
                                <div>
                                    <p className="widget-title">Query status</p>
                                    <p className="widget-sub-orange">1 Response</p>
                                </div>
                            </div>
                            <div className="widget">
                                <Calendar className="widget-icon" />
                                <div>
                                    <p className="widget-title">Meeting schedule</p>
                                    <p className="widget-sub">Next meeting on:<br/><strong>April 25, 2025</strong></p>
                                </div>
                            </div>
                            <div className="widget">
                                <Bookmark className="widget-icon" />
                                <div>
                                    <p className="widget-title">Events</p>
                                    <p className="widget-sub-italic">No events available</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}


export default Dashboard;