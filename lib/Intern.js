const Employee = require('./Employee');

class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email)
        this.school = school;
    }
  
    getSchool(){
        console.log(`The school attended is  ${this.getSchool}`);
        return this.school;
    }
    
    getRole(){
        console.log(`The role is  ${this.getRole}`);
        return 'Intern';
    }
}

module.exports = Intern;