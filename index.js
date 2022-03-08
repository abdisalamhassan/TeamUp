const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/intern');
const generateSite =require('./src/generate-site');
const fs = require('fs');
const util = require('util');
const path = require("path");
const OUTPUT_DIR = path.resolve(_dirname,"output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const teamMember = [];

const promptInfo = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name1',
            message: 'What is your name?',
            validate: nameInput => {
                if(nameInput){
                    return true;
                } else { 
                    console.log('You must enter a name to continue!');
                    return false;
                };
            }
        },
        {
            type: 'input',
            name:'employeeId',
            message: "What is your Employee id?",
            validate: employeeId => {
                if(employeeId){
                    return true;
                } else { 
                    console.log('You must enter an employee ID to continue!');
                    return false;
                };
            }
        },
        {
            type: 'input',
            name: 'email1',
            message: 'What is your email?',
            validate: email => {
                if(email){
                    return true;
                } else { 
                    console.log('You must enter an email to continue!');
                    return false;
                }
            }
        },
        
    ]).then(answers=> { 
        console.log(answers);
        const manager = new Manager(answers.name, answers.employeeId, answers.email);
        teamMembers.push(manager);
        promptMenu();
    })
};

const promptMenu = ()=> {
    return inquirer.prompt([
        {
            type: "list",
            name: "menu",
            message: 'Please select an an option:',
            choices: ['add an engineer', 'add an intern', 'finish building team']
        }])
        .then(userChoice => {
            switch(userChoice.menu) {
                case "add an engineer":
                    promptEngineer();
                    break;
                    default:
                        buildTeam();
            }
        });
};

const promptEngineer = () => {
    console.log(`ADD AN ENGINEER`);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the Engineer?',
            validate: engineerName => {
                if(engineerName){
                    return true;
                } else { 
                    console.log('You must enter an engineer name to continue!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name:'name',
            message: 'Enter your Employee ID',
            validate: employeeId=> {
                if(employeeId){
                    return true;
                } else { 
                    console.log('You must enter an Employee ID to continue!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'githubUsername',
            message: "Please enter your Github username.",
            validate: githubUsername=> {
                if(githubUsername){
                    return true;
                } else { 
                    console.log('You must enter a Github Username to continue!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter your email",
            validate: email => {
                if(email){
                    return true;
                } else { 
                    console.log('You must enter an email to continue!');
                    return false;
                }
            }
        },

    ]).then(answers => {
        console.log(answers);
        const engineer = new Engineer(answers.name,answers.employeeId,answers.githubUsername,answers.email);
        teamMembers.push(engineer);
        promptMenu();
    })
};

const promptIntern = () => {
    console.log(`ADD AN INTERN`);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the Intern?',
            validate: internName => {
                if(internName){
                    return true;
                } else { 
                    console.log('You must enter an intern name to continue!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name:'name',
            message: 'Enter your Employee ID',
            validate: employeeId=> {
                if(employeeId){
                    return true;
                } else { 
                    console.log('You must enter an Employee ID to continue!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter your school",
            validate: school=> {
                if(school){
                    return true;
                } else { 
                    console.log('You must enter a school name to continue!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter your email",
            validate: email => {
                if(email){
                    return true;
                } else { 
                    console.log('You must enter an email to continue!');
                    return false;
                }
            }
        },

    ]).then(answers => {
        console.log(answers);
        const engineer = new Intern(answers.name,answers.employeeId,answers.school,answers.email);
        teamMembers.push(Intern);
        promptMenu();
    })
};

const buildTeam = () => {
    console.log( `DONE BUILDING YOUR TEAM`);

    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath,generateSite(teamMembers), "utf-8");
}

promptManager();
