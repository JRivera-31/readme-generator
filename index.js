const fs = require("fs")
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown")

const questions = ["What is the title of the project?", "What is your Github username?", "What is the name of your repository?",
    "Please write a description of the project:", "Any specfic usage of the project?a", "Which license?", "If you have any contributors, what are their Github usernames?",
    "How to test your project?", "Installation method: "
];
   
    inquirer.prompt([
        {
            type: "input",
            message: questions[0],
            name: "title"
        },
        {
            type: "input",
            message: questions[1],
            name: "username"
        },
        {
            type: "input",
            message: questions[2],
            name: "repository"
        },
        {
            type: "input",
            message: questions[3],
            name: "description"
        },
        {
            type: "input",
            message: questions[4],
            name: "usage"
        },
        {
            type: "input",
            message: questions[6],
            name: "credits"
        },
        {
            type: "input",
            message: questions[7],
            name: "test"
        },
        {
            type: "list",
            message: questions[5],
            name: "license",
            choices: ["MIT", "Apache", "Apache 2", "GPL"]
        },
        {
            type: "input",
            message: questions[8],
            name: "installation"
        } 
    ]).then(function(answers) {
        let readme = generateMarkdown(answers)
        let fileName = answers.name + ".md" 
            
        fs.writeFile(fileName, JSON.stringify(readme), err => {
            if (err) {
                throw err
            } else {    
                console.log("Success")
            }    
        })
    })

