import {createContext, useEffect, useState} from "react";
import {useNavigate,} from "react-router-dom";
import {getStudentData , getFacultyData} from "../api/api.js";


export const StudentContext=createContext();

const StudentProvider = ({children}) =>{

    const [Student, setStudent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [assignedFaculty, setAssignedFaculty] = useState(null);
    const navigate = useNavigate();

    useEffect(() =>{
        const sessionID = sessionStorage.getItem("studentSessionID");

        if(!sessionID)
        {
            navigate("/register");

        }

        const fetchProfile = async ()=>{
            try
            {
                const response = await getStudentData(sessionID);
                if(response.status===200)
                {
                    setStudent(response.data);
                }
                if (Student.Student.assignedFaculty) {
                    try {
                        const facultyRes = await getFacultyData(Student.Student.assignedFaculty);
                        if (facultyRes.status === 200) {
                            setAssignedFaculty(facultyRes.data);
                        }
                    } catch (facErr) {
                        console.error("Could not fetch assigned faculty:", facErr);
                    }
                }
            }
            catch(err)
            {
                console.error("Error fetching student data:", err);
                sessionStorage.removeItem("studentSessionID");
                navigate("/register");
            }
            finally {
                setLoading(false);
            }
        }

        fetchProfile().then();

    }, [navigate]);

    if (loading) {
        return <div style={{ padding: "50px", textAlign: "center" }}>Loading MARG Dash...</div>;
    }


   return(
        <StudentContext.Provider value={{ Student,setStudent, assignedFaculty}}>{children}</StudentContext.Provider>
    )

}

export default StudentProvider;
