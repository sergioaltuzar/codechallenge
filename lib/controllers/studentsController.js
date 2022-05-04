const Reader = require("./../../lib/utils/reader");
const StudentService = require("./../../lib/services/studentService");

class StudentController {
    static getAllStudents() {
        const partners = Reader.readJsonFile("visualpartners.json");
        const partner = StudentService.getAllStudents(partners);
        return partner;
    }
    static getEmails() {
        const partners = Reader.readJsonFile("visualpartners.json");
        const partner = StudentService.getEmails(partners);
        return partner;
    }
    static getStudentsMore500Credits() {
        const partners = Reader.readJsonFile("visualpartners.json");
        const partner = StudentService.getStudentsMore500Credits(partners);
        return partner;
    }
}

module.exports = StudentController;
module.exports = StudentController;