// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Manager extends Employee {
  //Use New constructor and Super is used in reference to the parent class, calls all the parents constructor methods and properties
  constructor(name, id, email, officenumber) {
    super(name, id, email);
    this.officenumber = officenumber;
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
