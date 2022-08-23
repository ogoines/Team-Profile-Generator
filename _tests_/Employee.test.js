const Employee = require('../lib/Employee');

test("Should create an instance of an Employee object", () => {
   const testString = "Happy";
   const emp = new Employee(testString, 3, "test@test.com");
   expect(emp.name).toBe(testString);
});

test("getName() name of Employee should be returned", () => {
    const testString = "Orsha";
    const emp = new Employee(testString, 8, "any@email.com");
    expect(emp.getName()).toBe(testString);
});

test("getId() Id of employee should be returned", () => {
    const testString = "789";
    const emp = new Employee("Rex", testString, "any@email.com");
  expect(emp.getId()).toBe(testString);
});

test("getEmail() Email of employee should be returned", () => {
    const testString = "happy@gmail.com";
    const emp = new Employee("Rex", 7, testString);
  expect(emp.getEmail()).toBe(testString);
});