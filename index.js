const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");

const team= [];

const makeTeam = () => inquirer.prompt([
    {
     name: "role",   
     type: "list",
     message: "What is the employee's job position?",
     choices: ["Engineer", "Intern", "Manager"]
    }
])   
.then(function (choice) {
     switch(choice.role) {
        case "Engineer":
        addEngineer();
        break;    
     }
     switch(choice.role){
        case "Intern":
        addIntern();
        break;
     }
     switch(choice.role){
        case "Manager":
        addManager();
        break;
     }
})     



    
makeTeam()  
    
    
    
    
    
  //  {
  //   name: "name",
  //   type: "input",  
 //    message: "Please enter an employee's name"
 //   },
 //   {
  //   name: "id" ,
  //   type: "input",
  //   message: "Please enter the employees id:"  
  //  },
  //  {
  ///   name: "email",   
   //  type: "input",
   //  message: "What is the employee's email address?"
  //  },
    
    
    
 //   {
  //   name: "continue",
  //   type: "list",
  //   message: "Do you wish to add another employee?",
  //   choices: ["yes", "no"]
  //  }
//])

 //.then(function({role}){
 //   let backgroundInfo = "";
  //  switch (position){
  //     case "Engineer":
  //       backgroundInfo = "GitHub username";
     
  //    case "Intern":
 //        backgroundInfo = "school name";
 //       break;
 //      case "Manager":
  //       backgroundInfo = "office phone number";
  //      break;
  // }
 // })


  

//makeTeam()

//.then(() => console.log('Successful html write'))

//.catch((err) => console.error(err));

//.then(function({backgroundInfo,continue}) {
//  let employee;
//  switch (position){
 //     case "Engineer":
 //        employee = new Engineer(name, id, email, backgroundInfo);
 //        break;
 //     case "Intern":
  //       employee = new Intern(name, id, email, backgroundInfo);
  //       break;
  //    case "Manager":
   //      employee = new Manager(name, id, email, backgroundInfo);
  //       break;
  //  }
// })
// team.push(employee);
 //.then(function({name,position,id,email}){

    //.then(function({continue})