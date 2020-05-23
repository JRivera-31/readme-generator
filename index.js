const fs = require("fs")
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown")

const questions = ["What is the title of the project?", "What is your Github username?", "What is the name of your repository?",
    "Please write a short description of the project:", "Any specfic usage of the project?", "Which license?", 
    "If you have any contributors, what are their Github usernames?", "How to test your project? (no code)", "Any code to include for testing?", 
    "Installation method (no code):", "Any code to include for installation?"
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
            name: "repo"
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
            type: "input",
            message: questions[8],
            name: "testcode"
        },
        {
            type: "list",
            message: questions[5],
            name: "license",
            choices: ["MIT", "Apache", "Apache 2", "Github"]
        },
        {
            type: "input",
            message: questions[9],
            name: "installation"
        },
        {
            type: "input",
            message: questions[10],
            name: "installationcode"
        } 
    ]).then(function(answers) {
        let readme = generateMarkdown(answers)
        let fileName = answers.title + "README.md" 
            
        fs.writeFile(fileName, readme, err => {
            if (err) throw err  
                console.log("README Generated")
               
        })
    })

