const cors = require('cors');
const db = require("./db");
const express = require('express');
const app = express();
const PORT =8080;

app.use(express.json());
app.use(cors())
app.get('/ ', (req, res) => {
    res.send('Backend server is running!');
})

app.post('/register-student', (req, res) => {
    const { name,registration_no, degree, branch,year,gender,dob, linked_in, github } = req.body;

    const sql = `INSERT INTO Student(name, registration_no, degree, branch, year, gender, dob, linked_in, github) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    db.query(sql,[name, registration_no, degree, branch, year, gender, dob, linked_in, github], (err, result) => {
        if (err) {
            console.error('Error inserting student data:', err);
            res.status(500).json({ error: 'Failed to register student' });
        }
            res.status(200).json({ message: 'Student registered successfully' });

    })
})



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})