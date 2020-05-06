// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, github) {
        super(name, id, email, "Engineer");
        this.name = name;
        this.id = id;
        this.email;
        this.github = github;


    }

}
module.exports = Engineer;
// const engineer = new Engineer (6, "jahugawugasuga", "Manager");
// console.log(`${this.role}`)
// console.log(`${engineer.role}`)
// console.log(`${engineer.school}`)