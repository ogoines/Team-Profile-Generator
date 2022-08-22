const Manager = require('../lib/Manager');

test("Should create an instance of an Manager object", () => {
   const testString = "Happy";
   const emp = new Manager(testString, 3, "test@test.com", "484-555-5555");
   expect(emp.name).toBe(testString);
});

test("getofficeNumber() Office number should be returned", () => {
    const testString = "777-888-8888";
    const emp = new Manager("Orsha", 8, "any@email.com", testString);
    expect(emp.getofficeNumber()).toBe(testString);
});

test("getRole() Role of Engineer should be returned", () => {
    const testString = "Manager";
    const emp = new Manager("Rex", 7, "any@email.com", "987-654-3210");
  expect(emp.getRole()).toBe(testString);
});

