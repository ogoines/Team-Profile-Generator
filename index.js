const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const team= [];

const addEmployee = () => inquirer.prompt([
    {
     name: "name",
     message: "Please enter an employee's name:"
    },
    {
     name: "id" ,
     type: "input",
     message: "Please enter the employees id:"  
    },
    {
     name: "email",   
     type: "input",
     message: "What is the employee's email address?"
    },
    {
     name: "position",   
     type: "list",
     message: "What is the employee's job position?",
     choices: ["Engineer", "Intern", "Manager"]
    },
    {
     name: "continue",
     type: "list",
     message: "Do you wish to add another employee?",
     choices: ["yes", "no"]
    }
])
.then(function({backgroundInfo, continue}) {
    let employee;
    switch (position){
        case "Engineer":
        employee = new Engineer(name, id, email, backgroundInfo);
        case "Intern":
        employee = new Intern(name, id, email, backgroundInfo);
        case "Manager":
        employee = new Manager(name, id, email, backgroundInfo);
     }
     team.push(employee);
     
