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
      message: "Do you wish to add another employee?",
      choices: [ "yes", "no"],
      name: "moreEmployees"
    }
 ])  
 .then(function({moreEmployees}) {
    if (moreEmployees === "yes") {
       
       addEmployee();
    } else {
       // console.log(err) 
       return;
    }
 
 })
  
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
 
 if (role ==="Engineer") {
         inquirer.prompt([
           {
             name: "github",
             type: "input",
             message: "Please enter Github user name:"
           }
         ])
         .then (function({github}){
         
             const employee = new Engineer(name, id, email, github);
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
             const employee = new Manager (name, id, email, officenumber);
             team.push(employee);
             console.log(team);
             console.log("Trying to use Manager function");
             moreQuestions();
        })   
      
      }
  //////////////////////
 })      
addEmployee();

const html =
`<!DOCTYPE html>
  <html lang="en">
  <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <meta http-equiv="X-UA-Compatible" content="ie=edge">
     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
     <title>Team Profile Generator</title>
  
     <style>
      .row {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 20px;
        margin-bottom: 20px;}
    
      .card {
        padding: 20px;
        border-radius: 6px;
        background-color: white;
        color: powderblue;
        margin: 20px;}
    
      .text {
        padding: 20px;
        border-radius: 6px;
        background-color: white;
        color: black;
        margin: 20px;}
      .col {
        flex: 1;
        text-align: center;}
     </style>`;
 
  fs.writeFile("teamOrsha.html", html, function(err) {
     if (err) {
       console.log(err);
     }
  });


function addcardHtml(team) {
   
   team.forEach(function (member) {
    
    const name = member.getName();
    const id = member.getId();
    const email = member.getEmail();
    const role = member.getRole();
    let data = "";
   
    if (role === "Engineer") {
        const gitHub = member.getGithub();
        data = `<div class="col-6">
        <div class="card mx-auto mb-3" style="width: 18rem">
        <h5 class="card-header">${name}<br /><br />Engineer</h5>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${id}</li>
            <li class="list-group-item">Email Address: ${email}</li>
            <li class="list-group-item">GitHub: ${gitHub}</li>
        </ul>
        </div>
    </div>`;
    } else if (role === "Intern") {
        const school = member.getSchool();
        data = `<div class="col-6">
        <div class="card mx-auto mb-3" style="width: 18rem">
        <h5 class="card-header">${name}<br /><br />Intern</h5>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${id}</li>
            <li class="list-group-item">Email Address: ${email}</li>
            <li class="list-group-item">School: ${school}</li>
        </ul>
        </div>
    </div>`;
    } else {
        const officePhone = member.getOfficeNumber();
        data = `<div class="col-6">
        <div class="card mx-auto mb-3" style="width: 18rem">
        <h5 class="card-header">${name}<br /><br />Manager</h5>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${id}</li>
            <li class="list-group-item">Email Address: ${email}</li>
            <li class="list-group-item">Office Phone: ${officePhone}</li>
        </ul>
        </div>
    </div>`
    }
 });
}
addcardHtml(team)







  
  
  
  
  
   
 
     
     
     





    
    
    
