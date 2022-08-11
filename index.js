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
   
])  
.then(function (entry) {
     switch(entry.role) {
        case "Engineer":
          addEngineer();
        break;    
     }
     switch(entry.role) {
        case "Intern":
          addIntern();
        break;
     }
     switch(entry.role) {
        case "Manager":
          addManager();
        break;
     }
})     








function addEngineer() {
   inquirer.prompt([
    {
      name: "name",
      type: "input",  
      message: "Please enter an Engineer's name:"
   },
   {
      name: "id" ,
      type: "input",
      message: "What is the Engineer's id?"  
   },
   {
      name: "email",   
      type: "input",
      message: "Please enter the Engineer's email address:"
   }, 
   {
      name: "github",
      type: "input",
      message: "What is the Engineer's GitHub username?"
   },

  ]) .then(entry=> {
      const engineer = new Engineer(entry.name, entry.id, entry.email, entry.github);
          team.push(engineer);
          console.log(team);
          console.log("Trying to addEngineer function")
          
      });
}


function addIntern(){
   inquirer.prompt([
      {
        name: "name",
        type: "input",  
        message: "Please enter an Intern's name:"
     },
     {
        name: "id" ,
        type: "input",
        message: "What is the Intern's id?"  
     },
     {
        name: "email",   
        type: "input",
        message: "Please enter the Intern's email address:"
     }, 
     {
        name: "schoolname",
        type: "input",
        message: "What is the Intern's school name?"
     },
  
    ]) .then(entry=> {
        const intern = new Intern(entry.name, entry.id, entry.email, entry.schoolname);
            team.push(intern);
            console.log(team);
            console.log("Trying to addIntern function")
            
        });
  }
   

  function addManager(){
   inquirer.prompt([
      {
        name: "name",
        type: "input",  
        message: "Please enter a Manager's name:"
     },
     {
        name: "id" ,
        type: "input",
        message: "What is the Manager's id?"  
     },
     {
        name: "email",   
        type: "input",
        message: "Please enter the Manager's email address:"
     }, 
     {
        name: "officenumber",
        type: "input",
        message: "What is the Manager's office number ?"
     },
  
    ]) .then(entry=> {
        const manager = new Intern(entry.name, entry.id, entry.email, entry.officenumber);
            team.push(manager);
            console.log(team);
            console.log("Trying to addManager function")
            
        });
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