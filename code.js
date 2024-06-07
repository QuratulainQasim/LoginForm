const express = require('express');
const cors = require('cors');
const app = express();
const port = 4500;

const students = {
    S101: { name: 'Alice Johnson', age: 20, major: 'Computer Science' },
    S102: { name: 'Bob Smith', age: 22, major: 'Mechanical Engineering' },
    S103: { name: 'Charlie Brown', age: 21, major: 'Business Administration' },
    S104: { name: 'Daisy Miller', age: 19, major: 'Psychology' },
    S105: { name: 'Ethan Davis', age: 23, major: 'Electrical Engineering' },
    S106: { name: 'Fiona Williams', age: 20, major: 'Biology' }
};

// Use CORS middleware
app.use(cors());

app.get('/api/students', (req, res) => {
    res.json(students);
});

app.get('/api/get-student', (req, res) => {
    const id = req.query.id ? req.query.id.toUpperCase() : null;
    if (id && students[id]) {
        res.json(students[id]);
    } else {
        res.status(404).json({ error: 'Student not found' });
    }
});

app.listen(port, () => {
    console.log(`Student API listening at http://localhost:${port}`);
});
