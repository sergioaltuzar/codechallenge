
   
const StudentService = require("./../../lib/services/studentService");
const Reader = require("./../../lib/utils/reader");

describe("StudentService", () => {
    test("Prueba para getAllStudents", () => {
        const partners = Reader.readJsonFile("visualpartners.json");
        const partner = StudentService.getAllStudents(partners);

        expect(partner).toBeDefined();
    });

    test("Prueba para emails de estudiantes", () => {
        const partners = Reader.readJsonFile("visualpartners.json");
        const partner = StudentService.getEmails(partners);
        
        expect(partner[1]).toBe("Sexton@visualpartnership.xyz");
    });

    test("Prueba estudiantes con mas de 500 creditos", () => {
        const partners = Reader.readJsonFile("visualpartners.json");
        const partner = StudentService.getStudentsMore500Credits(partners);
        let status;
        partner.forEach((element) => element.credits > 500 ? status = true : status = false);
        
        expect(status).toBe(true);
    });
});