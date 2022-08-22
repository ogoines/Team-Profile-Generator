const Intern = require('../lib/Intern');

test("Should create an instance of an Engineer object", () => {
   const testString = "Happy";
   const emp = new Intern(testString, 3, "test@test.com", "AnySchool");
   expect(emp.name).toBe(testString);
});

test("getSchool() school should be returned", () => {
    const testString = "A School";
    const emp = new Intern("Orsha", 8, "any@email.com", testString);
    expect(emp.getSchool()).toBe(testString);
});

test("getRole() Role of Intern should be returned", () => {
    const testString = "Intern";
    const emp = new Intern("Rex", 7, "any@email.com", "Someschool");
  expect(emp.getRole()).toBe(testString);
});

