const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");
//const { isTypedArray } = require("util/types");
const team = [];

const makeTeam = () => inquirer.prompt([
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
.then(function ({role, name, id, email} ) {
      
   switch(role) {
      case "Engineer":
          inquirer.prompt([
           {
             name: "github",
             type: "input",
             message: "Please enter Github user name:"
           }
           ])
         .then (function({github}){
             const engineer = new Engineer(name, id, email, github);
             team.push(engineer);
             console.log(team);
             console.log("Trying to use Engineer function")
          })   
     break; 
     case "Intern":
          inquirer.prompt([
           {
             name: "schoolname",
             type: "input",
             message: "Please enter employee's school name:"
           }
          ])
         .then (function({schoolname}){
             const intern = new Intern(name, id, email, schoolname);
             team.push(intern);
             console.log(team);
             console.log("Trying to use Intern function")
          })   
     break; 
     case "Manager":
      inquirer.prompt([
      {
        name: "officenumber",
        type: "input",
        message: "Please enter employee's office number:"
      }
      ])
        .then (function({officenumber}){
            const manager = new Intern(name, id, email, officenumber);
            team.push(manager);
            console.log(team);
            console.log("Trying to use Manager function")
        })   
      break;


   }


}) 
   //  switch(role) {
     //   case "Intern":
     //     addIntern();
     //   break;
    // }
   //  switch(role) {
   //     case "Manager":
    //      addManager();
    //    break;
   //  }
 







     
     
     //addEmployee();    




function addEngineer() {
          const engineer = new Engineer(entry.name, entry.id, entry.email, entry.github);
          team.push(engineer);
          console.log(team);
          console.log("Trying to addEngineer function")
          

}


   
makeTeam()  
    
    
