const StudentController = require("./controllers/studentsController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;
app.get("/", (req, res) => {
    res.send("Estas en el code challenge de visualtpartners");
});

app.get("/students", (req, res) => {
    const partner = StudentController.getAllStudentsAndTheirFields();
    res.json(partner);
});

app.get("/students/emails", (req, res) => {
    const mails = StudentController.getEmails();
    res.json(mails);
});

app.get("/students/credits", (req, res) => {
    const students = StudentController.getStudentsWithMoreThan500Credits();
    res.json(students);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
