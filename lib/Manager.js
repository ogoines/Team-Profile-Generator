const Employee = require('./Employee');

class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email)
        this.officeNumber = officeNumber;
    }
    getofficeNumber(){
        console.log(`The office number is ${this.officNumber}`);
        return this.officeNumber;
    }

    getRole(){
        console.log(`The role is  ${this.getRole}`);
        return 'Manager';
    }
}

module.exports = Manager;