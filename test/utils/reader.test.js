const Reader = require("./../../lib/utils/reader");

describe("Unit test for Reader class", () => {
    test("Read json file", () => {
        const partners = Reader.readJsonFile("visualpartners.json");
        expect(partners).not.toBe(true);
    });
});