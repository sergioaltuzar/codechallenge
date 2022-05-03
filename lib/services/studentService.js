class StudentService {
    static getAllStudentsAndTheirFields(partners) {
        return partners;
    }
    static getEmails(partners) {
        const partner = partners.filter((student) => student.haveCertification === true);
        return partner.map(partner => partner.email);
    }
    static getStudentsWithMoreThan500Credits(partners) {
        const partner = partners.filter((student) => student.credits > 500);
        return partner;
    }
}
module.exports = StudentService;