import axios from 'axios';

const URL="http://localhost:8080";

export async function registerStudent(studentData)
{
    try
    {
        return await axios.post(`${URL}/register-student`, studentData);
    }
    catch(err)
    {
        console.error(`X Error Type ${err.name} \n ${err.message}`);
        throw err;
    }
}

export async function getStudentData(registration_no){
    try
    {
        return await axios.get(`${URL}/student/${registration_no}`);
    }
    catch(err)
    {
        console.error(`X Error Type ${err.name} \n ${err.message}`);
        throw err;
    }
}

export async function updateStudentData(registration_no, updatedData){
    try
    {
        return await axios.put(`${URL}/student/${registration_no}`, updatedData);
    }
    catch(err)
    {
        console.error(`X Error Type ${err.name} \n ${err.message}`);
        throw err;
    }
}

export async function registerFaculty(facultyData)
{
    try
    {
        return await axios.post(`${URL}/register-faculty`, facultyData);
    }
    catch (err)
    {
        console.error(`X Error Type ${err.name} \n ${err.message}`);
    }
}

export async function registrationNoExists(registration_no)
{
    try {
        const response = await axios.get(`${URL}/student/${registration_no}`);
        return response.status === 200; // If found, it exists
    } catch (err) {
        if (err.response && err.response.status === 404) {
            return false; // Not found, so it doesn't exist
        }
        console.error(`X Error Type ${err.name} \n ${err.message}`);
        throw err; // Rethrow other errors
    }
}


export async function getFacultyData(email) {
    try {
        return await axios.get(`${URL}/faculty/${email}`);
    } catch(err) {
        console.error(`X Error Type ${err.name} \n ${err.message}`);
        throw err;
    }
}


export async function createQuery(queryData) {
    try {
        return await axios.post(`${URL}/queries`, queryData);
    } catch(err) {
        console.error(`X Error Type ${err.name} \n ${err.message}`);
        throw err;
    }
}

export async function getStudentQueries(registration_no) {
    try {
        return await axios.get(`${URL}/student/${registration_no}/queries`);
    } catch(err) {
        console.error(`X Error Type ${err.name} \n ${err.message}`);
        throw err;
    }
}

export async function getFacultyQueries(email) {
    try {
        return await axios.get(`${URL}/faculty/${email}/queries`);
    } catch(err) {
        console.error(`X Error Type ${err.name} \n ${err.message}`);
        throw err;
    }
}
