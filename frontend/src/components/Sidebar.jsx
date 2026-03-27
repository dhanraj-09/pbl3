import {Home,FileText,MessageSquare,Users,Settings} from "lucide-react";
import {useLocation, useNavigate} from "react-router-dom";



const Sidebar=()=>{

    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = () => {
        sessionStorage.removeItem("studentSessionID");
        navigate("/");
    };



    return(
        <aside className="sidebar">
            <h1 className="logo">MARG</h1>
            <nav className="nav-menu">
                <div className={location.pathname==="/dashboard" ? 'nav-item active':'nav-item'} onClick={() => navigate("/dashboard")    }>
                    <Home size={20} /> <span>Home</span>
                </div>
                <div className={location.pathname==="/new-query" ? 'nav-item active':'nav-item'} onClick={() => navigate("/new-query")}>
                    <FileText size={20} /> <span>Raise a Query</span>
                </div>
                <div className="nav-item">
                    <MessageSquare size={20} /> <span>Chat</span>
                </div>
                <div className="nav-item">
                    <Users size={20} /> <span>Community</span>
                </div>
                <div className="nav-item">
                    <button className="btn-logout" onClick={handleLogout}>Logout</button>
                </div>
                <div className="nav-item settings">
                    <Settings size={20} /> <span>Settings</span>
                </div>
            </nav>
        </aside>
    )
}

export default Sidebar;