// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(id, school, role) {
        super(answers.name, answers.id, answers.email);
        this.school = school;
        this.role = role;
        
    }



}

const intern = new Intern (35, "BYU", "Intern");
console.log(`${this.role}`)
console.log(`${intern.role}`)
console.log(`${intern.school}`)