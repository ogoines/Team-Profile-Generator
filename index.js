const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");
//const { isTypedArray } = require("util/types");
const team = [];

function moreQuestions (){  
   inquirer.prompt([
    {
      type: "list",
      message: "Do you wish to add another employee?",
      choices: [ "yes", "no"],
      name: "moreEmployees"
    }
 ])  
 .then(function({moreEmployees}) {
    if (moreEmployees === "yes") {
       
       addEmployee();
    } else {
       console.log(err) 
    }
 
 })
 }  
 


const addEmployee = () => inquirer.prompt([
   {
      name: "name",
      type: "input",  
      message: "Please enter an  employee's name:"
   },
   {
      name: "role",   
      type: "list",
      message: "What is the employee's job position?",
      choices: ["Engineer", "Intern", "Manager"]
   },
   {
      name: "id" ,
      type: "input",
      message: "What is the employees's id?"  
   },
   {
      name: "email",   
      type: "input",
      message: "Please enter the employees's email address:"
   } 
])  
.then(function ({role, name, id, email}) {
  // let employee = {}; 
  //console.log(schoolname);
  
 if (role ==="Engineer") {
         inquirer.prompt([
           {
             name: "github",
             type: "input",
             message: "Please enter Github user name:"
           }
         ])
         .then (function({github}){
         
             employee = new Engineer(name, id, email, github);
             team.push(employee);
             console.log(team);
             console.log("Trying to use Engineer function");
             moreQuestions();
            // console.log(employee);
         })   
      }
   else if  (role ==="Intern") {
          inquirer.prompt([
           {
             name: "schoolname",
             type: "input",
             message: "Please enter employee's school name:"
           }
          ])
         .then (function({schoolname}){
             const employee  = new Intern(name, id, email, schoolname);
             team.push(employee);
             console.log(team);
             console.log("Trying to use Intern function")
             moreQuestions();
          })   
      } 
     else {
          inquirer.prompt([
          {
            name: "officenumber",
            type: "input",
            message: "Please enter employee's office number:"
          }
         ])
        .then (function({officenumber}){
            const employee = new Intern(name, id, email, officenumber);
            team.push(employee);
            console.log(team);
            console.log("Trying to use Manager function");
            moreQuestions();
        })   
      
      }
     
     
     
//////////////////////
 })      
addEmployee();







  
  
  
  
  
   
 
     
     
     





    
    
    
