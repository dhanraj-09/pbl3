import StudentProvider from "../context/StudentContext.jsx"
import Sidebar from "../components/Sidebar.jsx";
import {Outlet} from "react-router-dom";










const StudentLayout=()=>{
    return(
        <StudentProvider>
            <div className={"dashboard-container"}>
                <Sidebar></Sidebar>
                <main className={"main-content"}>
                    <Outlet></Outlet>
                </main>
            </div>
        </StudentProvider>
    )
}

export default StudentLayout;