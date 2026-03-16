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

