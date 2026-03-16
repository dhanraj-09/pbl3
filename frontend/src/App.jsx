import Dashboard from "./pages/Dashboard.jsx";
import TeacherProfile from "./pages/TeacherProfile.jsx";
import RaiseQuery from "./pages/RaiseQuery.jsx";
import NewQueryForm from "./pages/NewQueryForm.jsx";
import SignUp from "./pages/SignUp.jsx";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from "./pages/Login.jsx";

function App() {


  return (
    <Router>
        <Routes>
            <Route exact path="/" element={<Login/>} />
            <Route path="/register" element={<SignUp/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/teacherprofile" element={<TeacherProfile/>} />
            <Route path="/raise-query" element={<RaiseQuery/>} />
            <Route path="/new-query" element={<NewQueryForm/>} />
        </Routes>
    </Router>
  )
}

export default App
