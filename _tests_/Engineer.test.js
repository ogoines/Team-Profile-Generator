const Engineer = require('../lib/Engineer');

test("Should create an instance of an Engineer object", () => {
   const testString = "Happy";
   const emp = new Engineer(testString, 3, "test@test.com", "GitHubUser");
   expect(emp.name).toBe(testString);
});

test("getGithub() Github username should be returned", () => {
    const testString = "GitHubUser";
    const emp = new Engineer("Orsha", 8, "any@email.com", testString);
    expect(emp.getGithub()).toBe(testString);
});

test("getRole() Role of Engineer should be returned", () => {
    const testString = "Engineer";
    const emp = new Engineer("Rex", 7, "any@email.com", "Gitperson");
  expect(emp.getRole()).toBe(testString);
});

