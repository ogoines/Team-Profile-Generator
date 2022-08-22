const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");
//const { isTypedArray } = require("util/types");
const team = [];

const  moreQuestions = () => inquirer.prompt([
    {
      type: "list",
      message: "Do you wish to add employee?",
      choices: ["yes", "no"],
      name: "moreEmployees"
    }
 ])  
 .then(function({moreEmployees}) {
    if (moreEmployees === "yes") {
       
       buildTeam();
    } else {
       return;
    }
 })
  
const buildTeam = () => inquirer.prompt([
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
 
 if (role === "Engineer") {
         inquirer.prompt([
           {
             name: "github",
             type: "input",
             message: "Please enter Github user name:"
           }
         ])
         .then (function({github}) {
         
             const employee = new Engineer(name, id, email, github);
             team.push(employee);
             engineerHtml(name, id, email, github);
             moreQuestions();
           
         })   
      }
   else if  (role === "Intern") {
          inquirer.prompt([
           {
             name: "schoolname",
             type: "input",
             message: "Please enter employee's school name:"
           }
          ])
         .then (function({schoolname}) {
             const employee  = new Intern(name, id, email, schoolname);
             team.push(employee);
             internHtml(name,id,email,schoolname);
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
        .then (function({officenumber}) {
             const employee = new Manager (name, id, email, officenumber);
             team.push(employee);
             managerHtml(name, id, email, officenumber);
             moreQuestions();
        })   
      
      }
})      

function headerHtml(){
 const headerData =
`<!DOCTYPE html>
  <html lang="en">
  <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <meta http-equiv="X-UA-Compatible" content="ie=edge">
     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
     <link rel="stylesheet" href="dist/style.css">
     <title>Team Profile Generator</title>
   </head>`;
 
  fs.writeFile("index.html", headerData, function(err) {
     if (err) {
      
       console.log(err);
     }
  });
}
headerHtml(); 

function bodyHtml(){
   let teamData = `<body>
   <nav class="navbar navbar-dark bg-dark justify-content-center align-items-center">
       <span class="navbar-brand mb-0 h1"><h1>My Team</h1></span>
   </nav>
   <div class="row">`;

   fs.appendFile("index.html", teamData, function(err) {
      if (err) {
        console.log(err);
      }
   });
   
   buildTeam();
   
   let endData = 
     `</div>
    </body>
   </html>`;

   fs.appendFile("index.html", endData, function(err) {
      if (err) {
        console.log(err);
      }
   });

}
bodyHtml();



   function engineerHtml(name, id, email, gitHub) {  
      let engineerData = 
      `<div class="card bg-dark justify-content-center align-items-center">
         <div class="col card-header">
           <h4>${name}</h4>
       </div>
         <div class="col card-header">
          <h4>Engineer</h4>
       </div>
       <ul class="list-group list-group-flush text">
           <li class="list-group-item">ID: ${id}</li>
           <li class="list-group-item">Email: ${email}</li>
           <li class="list-group-item">GitHub: ${gitHub}</li>
       </ul>
       </div>`;  
  
   fs.appendFile("index.html", engineerData, function(err) {
       if (err) {
         console.log(err);
       }
   });
  }


function internHtml(name, id, email, school) {  
    let internData =
    `<div class="card bg-dark justify-content-center align-items-center">
       <div class="col card-header">
         <h4>${name}</h4>
       </div>
       <div class="col card-header">
          <h4>Intern</h4>
       </div>
       <ul class="list-group list-group-flush text">
          <li class="list-group-item">ID: ${id}</li>
          <li class="list-group-item">Email: ${email}</li>
          <li class="list-group-item">School Name: ${school}</li>
       </ul>
    </div>`;  

    fs.appendFile("index.html", internData, function(err) {
      if (err) {
      console.log(err);
     }
    });
}

function managerHtml(name, id, email, officenumber) {  
     let managerData =
     `<div class="card bg-dark justify-content-center align-items-center">
         <div class="col card-header">
           <h4>${name}</h4>
       </div>
         <div class="col card-header">
          <h4>Manager</h4>
       </div>
       <ul class="list-group list-group-flush text">
           <li class="list-group-item">ID: ${id}</li>
           <li class="list-group-item">Email: ${email}</li>
           <li class="list-group-item">Office #: ${officenumber}</li>
       </ul>
       </div>`;  

     fs.appendFile("index.html", managerData, function(err) {
       if (err) {
       console.log(err);
       }
      });
}



   
  
    
  
   
   
  
   
   
   
 










  
  
  
  
  
   
 
     
     
     





    
    
    
