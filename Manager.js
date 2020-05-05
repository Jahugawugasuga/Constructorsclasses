// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor (id, officenumber, role) {
        super(answers.name, answers.id, answers.email)
        this.officenumber = officenumber;
        this.role = role;
        
        

    }
}

const manager = new Manager (6, 2, "Manager");
console.log(`${this.role}`)
console.log(`${manager.role}`)
console.log(`${manager.school}`)