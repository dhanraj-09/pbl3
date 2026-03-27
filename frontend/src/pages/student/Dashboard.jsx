import "./dashboard.css";
import {useContext} from "react";
import {useNavigate} from "react-router-dom";
import {StudentContext} from "../../context/StudentContext.jsx";
import {Info, MessageSquare, MessageCircle, Calendar, Bookmark} from "lucide-react";


const Dashboard = () =>
{

    const { Student, assignedFaculty } = useContext(StudentContext);
    const navigate = useNavigate();


    if(!Student)
    {
        return null;// Not the best practice;
    }
    else
    {
        console.log(Student.Student.name);
    }

    return (
        <div className="content-wrapper">
            <div className="info-icon">
                <Info size={24} />
            </div>

            {/* Student Profile Card */}
            <section className="profile-card">
                <div className="profile-left">
                    <div className="avatar-circle">
                        <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400" alt="Student" />
                    </div>
                    <h2>{Student.Student.name}</h2>
                </div>

                <div className="profile-right">
                    <div className="profile-header">
                        <div className="ids">
                            <p>{Student.Student.registration_no}</p>
                            <p>outlook id</p>
                        </div>
                        <button className="btn-edit" onClick={() => navigate("/edit-profile")}>Edit Profile</button>
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
                        {assignedFaculty ? (
                            <>
                                <h3>{assignedFaculty.name}</h3>
                                <p>{assignedFaculty.department}</p>
                                <button onClick={() => navigate('/faculty-profile')} className="btn-view">
                                    View Profile
                                </button>
                            </>
                        ) : (
                            <>
                                <h3>No Mentor Assigned</h3>
                                <p>Pending allocation</p>
                                <button disabled style={{ opacity: 0.5, cursor: "not-allowed" }} className="btn-view">
                                    View Profile
                                </button>
                            </>
                        )}
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
    )
}


export default Dashboard;