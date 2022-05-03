const Reader = require("./../../lib/utils/reader");
const StudentService = require("./../../lib/services/studentService");

class StudentController {
    static getAllStudentsAndTheirFields() {
        const partners = Reader.readJsonFile("visualpartners.json");
        const partner = StudentService.getAllStudentsAndTheirFields(partners);
        return partner;
    }
    static getEmails() {
        const partners = Reader.readJsonFile("visualpartners.json");
        const partner = StudentService.getEmails(partners);
        return partner;
    }
    static getStudentsWithMoreThan500Credits() {
        const partners = Reader.readJsonFile("visualpartners.json");
        const partner = StudentService.getStudentsWithMoreThan500Credits(partners);
        return partner;
    }
}

module.exports = StudentController;

module.exports = StudentController;