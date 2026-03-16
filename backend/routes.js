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








module.exports=routes;


















