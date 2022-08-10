
class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }
  
    getName() {
      console.log(`This employees name is  ${this.name}`);
      return this.name;
    }
    
    getId(){
      console.log(`Employees id is ${this.id}`);
      return this.id;
      
    }
    
    getEmail(){
      console.log(`Employees email address is ${this.email}`);
      return this.email;
    }
    
    getRole(){
      console.log(`Employees role is ${this.getRole}`);
      return 'Employee';
    }
  }
  module.exports = Employee;
  






