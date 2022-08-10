const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email); 
        this.github = github;  
    }
    getGithub(){
        console.log(`The Github name is: ${this.name}`);
        return this.github;
    }
    getRole(){
        console.log(`This employees role is  ${this.getRole}`);
        return 'Engineer';
    }
}

module.exports = Engineer;