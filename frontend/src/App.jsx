import Dashboard from "./pages/student/Dashboard.jsx";
import TeacherProfile from "./pages/faculty/TeacherProfile.jsx";
import RaiseQuery from "./pages/student/RaiseQuery.jsx";
import NewQueryForm from "./pages/student/NewQueryForm.jsx";
import SignUp from "./pages/student/SignUp.jsx";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from "./pages/student/Login.jsx";
import EditProfile from "./pages/student/EditProfile.jsx";
import FacultyLogin from "./pages/faculty/FacultyLogin.jsx";
import StudentLayout from "./layouts/StudentLayout.jsx";

function App() {


  return (
    <Router>
        <Routes>
            <Route path={"/"} element={<Login/>}></Route>
            <Route path={"/register"} element={<SignUp/>}></Route>
            <Route path={"/FacultyLogin"} element={<FacultyLogin/>}></Route>

            <Route element={<StudentLayout/>}>
                <Route path={"/dashboard"} element={<Dashboard/>}></Route>
                <Route path={"/new-query"} element={<NewQueryForm/>}></Route>
                <Route path={"/Raise-Query"} element={<RaiseQuery/>}></Route>
                <Route path={"/edit-profile"} element={<EditProfile/>}></Route>
            </Route>

            <Route path={"/faculty-profile"} element={<TeacherProfile/>}></Route>

        </Routes>
    </Router>
  )
}

export default App
