const express = require('express');
const db = require("./db");
const routes = express.Router();

routes.route("/register-student").post((req, res) => {
    const { name,registration_no, degree, branch,year,gender,dob, linked_in, github } = req.body;

    const sql = `INSERT INTO Student(name, registration_no, degree, branch, year, gender, dob, linked_in, github) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    db.query(sql,[name, registration_no, degree, branch, year, gender, dob, linked_in, github], (err, result) => {
        if (err) {
            console.error('Error inserting student data:', err);
            res.status(500).json({ error: 'Failed to register student' });
        }
        res.status(200).json({ message: 'Student registered successfully' });

    })

});

routes.route("/student/:registration_no").get((req, res) => {
    const registration_no = req.params.registration_no;

    const sql = `SELECT * FROM Student WHERE registration_no = ?`;

    db.query(sql, [registration_no], (err, result) => {
        if (err) {
            console.error('Error fetching student data:', err);
            return res.status(500).json({ error: 'Failed to fetch student data' });
        }
        if (result.length === 0) {
           return  res.status(404).json({ error: 'Student not found' });
        }

        res.status(200).json(result[0]);

    });
});

routes.route("/student/:registration_no").put((req, res) => {

    // 1. Get the registration number from the URL
    const { registration_no } = req.params;

    // 2. Extract ALL fields from the request body, including the new faculty column
    const {
        name, degree, branch, year, gender, dob,
        linked_in, github, assigned_faculty_email
    } = req.body;

    // 3. Add assigned_faculty_email = ? to the end of the SET clause
    const sql = `UPDATE Student SET name = ?, degree = ?, branch = ?, year = ?, gender = ?, dob = ?, linked_in = ?, github = ?, assigned_faculty_email = ? WHERE registration_no = ?`;

    // 4. Add assigned_faculty_email to the values array right before the WHERE clause variable
    const values = [name, degree, branch, year, gender, dob, linked_in, github, assigned_faculty_email, registration_no];

    db.query(sql, values, (err, result) => {
        if(err) {
            console.error('Error updating student data:', err);
            return res.status(500).json({ error: 'Failed to update student data' });
        }
        if(result.affectedRows === 0) {
            return res.status(404).json({ error: 'Student not found' });
        }
        res.status(200).json({ message: 'Student data updated successfully' });
    });
});



// faculty routes

routes.route("/register-faculty").post((req,res)=>{
    const { name , email, designation, department, phone_number, linked_in, muj_page } = req.body;

    const values = [name, email, designation, department, phone_number, linked_in, muj_page];
    const sql = `INSERT INTO Faculty(name, email, designation, department, phone_number, linked_in, muj_page) VALUES (?, ?, ?, ?, ?, ?, ?)`;

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error inserting faculty data:', err);
             return res.status(500).json({ error: 'Failed to register faculty' });
        }
         return res.status(200).json({ message: 'Faculty registered successfully' });
    });
})


//get route for faculty data



//









module.exports=routes;


















