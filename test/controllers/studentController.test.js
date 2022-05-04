const StudentController = require("./../../lib/controllers/studentsController");

describe("studentController", () => {
    test("todos los estudiantes con todos sus campos", () => {
        const partner = StudentController.getAllStudents();
        expect(partner).toBeDefined();
    });
    test("Emails de todos los estudiantes que tienen certificacion", () => {
        const mails = StudentController.getEmails();
        expect(mails[0]).toBe("Todd@visualpartnership.xyz");
    });
    test("Students with more than 500 credits", () => {
        const partner = StudentController.getStudentsMore500Credits();
        let status;
        partner.forEach((element) => element.credits > 500 ? status = true : status = false);
        
        expect(status).toBe(true);
    });
});