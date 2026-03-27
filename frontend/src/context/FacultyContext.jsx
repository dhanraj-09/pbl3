import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getFacultyData } from "../api/api.js";

export const FacultyContext = createContext();

const FacultyProvider = ({ children }) => {
    const [faculty, setFaculty] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const sessionID = sessionStorage.getItem("facultySessionID");

        if (!sessionID) {
            navigate("/FacultyLogin");
            return;
        }

        const fetchProfile = async () => {
            try {
                // 2. Fetch data from your new API endpoint
                const response = await getFacultyData(sessionID);
                if (response.status === 200) {
                    setFaculty(response.data);
                }
            } catch (err) {
                console.error("Error fetching faculty data:", err);
                sessionStorage.removeItem("facultySessionID");
                navigate("/FacultyLogin");
            } finally {
                setLoading(false);
            }
        };

        fetchProfile().then();

    }, [navigate]);

    if (loading) {
        return <div style={{ padding: "50px", textAlign: "center" }}>Loading MARG Faculty Dashboard...</div>;
    }

    // 4. Wrap the children and provide the faculty data
    return (
        <FacultyContext.Provider value={{ faculty, setFaculty }}>
            {children}
        </FacultyContext.Provider>
    );
};

export default FacultyProvider;