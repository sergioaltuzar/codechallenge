const StudentController = require("./controllers/studentsController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;
app.get("/", (request, response) => {
    response.json( { message: "Este es el code challege de Sergio Altuzar!" } );
});

app.get("/v1", (request, response) => {
    const students = StudentController.getAllStudents();
    response.json( { students } );
});

app.get("/v1/emails", (request, response) => {
    const mails = StudentController.getEmails();
    response.json( { mails } );
});

app.get("/v1/credits", (request, response) => {
    const credits = StudentController.getStudentsMore500Credits();
    response.json( { credits } );
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
