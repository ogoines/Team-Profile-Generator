const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");
const team = [];

//Displays user prompt to add employees
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
  
//Displays prompts to add employee info
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
//prompts user input 
 if (role === "Engineer") {
         inquirer.prompt([
           {
             name: "github",
             type: "input",
             message: "Please enter Github user name:"
           }
         ])
         .then (function({github}) {
            // creates Engineer info adds to html
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
             // creates Intern info adds to html 
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
             // creates Manager info adds to html 
             const employee = new Manager (name, id, email, officenumber);
             team.push(employee);
             managerHtml(name, id, email, officenumber);
             moreQuestions();
        })   
      
      }
})      
//uses string to create header then writes to index.html 
function headerHtml(){
 const headerData =
`<!DOCTYPE html>
  <html lang="en">
  <head>
     <meta charset="UTF-8" />
     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl"
      crossorigin="anonymous"/>
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
//creates body of html then appends to header
function bodyHtml(){
   let teamData = `<body>
   <div class="container">
       <div class="jumbotron text-center">
           <div class="container">
               <h1 class="display-2">My Team</h1>
          </div>
       </div>
   </div>

   <div class="container">
       <div class="row p-4 justify-content-center">
           <div class="row p-3 d-flex justify-content-between">`;


   fs.appendFile("index.html", teamData, function(err) {
      if (err) {
        console.log(err);
      }
   });
   //prompts user then generates html cards with team members, adds to index.html
   buildTeam();
   //generates end of html
   let endData = 
     `</div>
       <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/	bootstrap.bundle.min.js"
         integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0"
         crossorigin="anonymous"></script>
    </body>
   </html>`;

   fs.appendFile("index.html", endData, function(err) {
      if (err) {
        console.log(err);
      }
   });

}
bodyHtml();


//creates engineer card with data for html
function engineerHtml(name, id, email, gitHub) {  
    let engineerData = 
      `<div class="card">
            <div class="card-body">
                <h3>${name}</h3>
                <h5 class="card-subtitle">Engineer</h5>
                <ul class="list-group list-group-flush text">
                    <li class="list-group-item">ID: ${id}</li>
                    <li class="list-group-item">Email: ${email}</li>
                    <li class="list-group-item">GitHub: ${gitHub}</li>
                </ul>
            </div>
        </div>`;  
          
   fs.appendFile("index.html", engineerData, function(err) {
       if (err) {
         console.log(err);
       }
   });
  }

//creates intern card with data for html
function internHtml(name, id, email, school) {  
    let internData =
    `<div class="card">
            <div class="card-body">
                <h3>${name}</h3>
                <h5 class="card-subtitle">Intern</h5>
                <ul class="list-group list-group-flush text">
                    <li class="list-group-item">ID: ${id}</li>
                    <li class="list-group-item">Email: ${email}</li>
                    <li class="list-group-item">School: ${school}</li>
                </ul>
            </div>
        </div>`;  

    fs.appendFile("index.html", internData, function(err) {
      if (err) {
      console.log(err);
     }
    });
}
//creates manager card with data for html
function managerHtml(name, id, email, officenumber) {  
     let managerData =
     `<div class="card">
            <div class="card-body">
                <h3>${name}</h3>
                <h5 class="card-subtitle">Manager</h5>
                <ul class="list-group list-group-flush text">
                    <li class="list-group-item">ID: ${id}</li>
                    <li class="list-group-item">Email: ${email}</li>
                    <li class="list-group-item">Office#: ${officenumber}</li>
                </ul>
            </div>
        </div>`;  

     fs.appendFile("index.html", managerData, function(err) {
       if (err) {
       console.log(err);
       }
      });
}



   
  
    
  
   
   
  
   
   
   
 










  
  
  
  
  
   
 
     
     
     





    
    
    
