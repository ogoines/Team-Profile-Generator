const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");
const team = [];

const makeTeam = () => inquirer.prompt([
    {
      name: "role",   
      type: "list",
      message: "What is the employee's job position?",
      choices: ["Engineer", "Intern", "Manager"]
    },
    {
      name: "name",
      type: "input",  
      message: "Please enter an employee's name"
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
    }
])   
.then(function (entry) {
     switch(entry.role) {
        case "Engineer":
         
         // addEngineer(entry, team);
          console.log(makeTeam);
        break;    
     }
     switch(entry.role){
        case "Intern":
          questionIntern();
          addIntern();
        break;
     }
     switch(entry.role){
        case "Manager":
          questionManager();
          addManager();
        break;
     }
})     



const questionEngineer = () => inquirer.prompt([
   { 
    name: "github",   
    type: "input",
    message: "Please enter the employee's GitHub username."
   }
])
.then(function (data) {
})


const questionIntern = () => inquirer.prompt([
   {
    name: "schoolname",   
    type: "input",
    message: "Please enter the employee's school name."
   }
])   

const questionManager = () => inquirer.prompt([
   {
    name: "officenumber",   
    type: "input",
    message: "Please enter the emplyees's office number"
   }
])   





function addEngineer(entry, teamArray)
{
  questionEngineer();
  const engineer = new Engineer(entry.name, entry.id, entry.email, entry.github);
  teamArray.push(engineer);
  console.log("Trying to addEngineer function")

}


function addIntern(){
   console.log("Trying to add Intern function")
}

function addManager(){
   console.log("Trying to add Manager")
   
}
makeTeam()  
    
    
    
    
    
   
   
    
    
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