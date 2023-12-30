// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Intern extends Employee {
  //Use New constructor and Super is used in reference to the parent class, calls all the parents constructor methods and properties
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
