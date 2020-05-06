const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```


function teamBuilder() {
  


    inquirer
        .prompt([

            {
                type: "list",
                message: "Are you creating an entry for a manager, engineer, or intern?",
                name: "role",
                choices: [
                    "Manager",
                    "Engineer",
                    "Intern",
                    

                ]
            },
            {
                type: "input",
                message: "What is the employee's name?",
                name: "name"
            },
            {
                type: "input",
                message: "What is their email?",
                name: "email"
            },
            {
                type: "input",
                message: "What is their ID#?",
                name: "id"
            },

        ])

        .then(function (answers) {
            const employee = new Employee (answers.name, answers.id, answers.email)
            var employeeType = answers.role
        
            switch (employeeType) {
                case ("Intern"):
                    inquirer.prompt([
                        {
                            type: "input",
                            message: "What school do they go to?",
                            name: "school"
                        },
                        {
                            type: "list",
                            message: "Would you like to add another employee?",
                            name: "more",
                            choices: [
                                "yes",
                                "no"
                            ]
                        }
                        
                    ])

                        .then(function (answers) {
                            const intern = new Intern (answers.school)
                            constructor(name, id, email)
                            if (answers.more === "yes"){
                                console.log(employee.name);
                                teamBuilder();
                                
                            } else {
                                // render();
                            }
                        
                        }
                        )
                    // getRole("Intern") //does this work?   
                    break;
                case ("Engineer"):
                    inquirer.prompt([

                        {
                            type: "input",
                            message: "What is their GitHub username?",
                            name: "github"
                        },

                        {
                            type: "list",
                            message: "Would you like to add another employee?",
                            name: "more",
                            choices: [
                                "yes",
                                "no"
                            ]
                        }
                    ])
                        .then(function (answers) {
                            const engineer = new Engineer (answers.github) 
                            if (answers.more === "yes"){
                                console.log(employee.name);
                                teamBuilder();
                            } else {
                                // render();
                            }
                        
                        }
                        )
                    // getGitHub();
                    // getRole("Engineer"); //does this work?
                    break;
                case ("Manager"):
                    inquirer.prompt([

                        {
                            type: "input",
                            message: "What is their Office Number?",
                            name: "officenumber"
                        },
                        {
                            type: "list",
                            message: "Would you like to add another employee?",
                            name: "more",
                            choices: [
                                "yes",
                                "no"
                            ]
                        }

                    ])
                        .then(function (answers) {
                            const manager = new Manager (answers.officenumber)
                            if (answers.more === "yes"){
                                console.log(employee.name);
                                teamBuilder();
                            } else {
                                // render();
                            }
                        
                        
                        }    // getRole("Manager") //does this work? 
                        )
             }
        }
    )
}
        
teamBuilder();