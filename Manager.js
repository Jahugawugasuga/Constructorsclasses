// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor (name, officenumber) {
        super(name, id, email, "Manager");
        this.officenumber = officenumber;
        this.role = role;
        
        

    }
}
module.exports = Manager;
// const manager = new Manager (6, 2, "Manager");
// console.log(`${this.role}`)
// console.log(`${manager.role}`)
// console.log(`${manager.school}`)