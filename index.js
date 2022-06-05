// link to positions 
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/intern");
//link to create site
const generateSite = require("./src/generate-site");
// node modules
const fs = require("fs");
const util = require("util");
const path = require("path");
const inquirer = require("inquirer");


const teamMembers = [];

//Questions for manager
const promptManager = () => {
    return inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is the manager's name?",
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log("You must enter a name to continue!");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "employeeId",
          message: "What is your Employee Id?",
          validate: (employeeId) => {
            if (employeeId) {
              return true;
            } else {
              console.log("You must enter an employee ID to continue!");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "email",
          message: "What is your email?",
          validate: (email) => {
            if (email) {
              return true;
            } else {
              console.log("You must enter an email to continue!");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "department",
          message: "What is your department?",
          validate: (department) => {
            if (department) {
              return true;
            } else {
              console.log("You must enter an department to continue!");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "OfficeNumber",
          message: "What is your Office Number?",
          validate: (OfficeNumber) => {
            if (OfficeNumber) {
              return true;
            } else {
              console.log("You must enter an Office Number to continue!");
              return false;
            }
          },
        },
      ])
      .then((answers) => {
        console.log(answers);
        const manager = new Manager(
          answers.name,
          answers.employeeId,
          answers.email,
          answers.department,
          answers.OfficeNumber
        );
        teamMembers.push(manager);
        promptMenu();
      });
  };

// Menu questions to select position

const promptMenu = () => {
    return inquirer
      .prompt([
        {
          type: "list",
          name: "menu",
          message: "What type of employee would you like to add to the team?",
          choices: ["Add a Manager", "Add an engineer", "Add an intern", "Finish building team!"],
        },
      ])
      .then((userChoice) => {
        switch (userChoice.menu) {
            case "add a manager":
            promptManager();
            break; 
          case "add an engineer":
            promptEngineer();
            break;
          case "add an intern":
            promptIntern();
            break;
          default:
            buildTeam();
        }
      });
  };


// questions for engineer
const promptEngineer = () => {
  console.log(`ADD AN ENGINEER`);

  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of the Engineer?",
        validate: (engineerName) => {
          if (engineerName) {
            return true;
          } else {
            console.log("You must enter an engineer name to continue!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "employeeId",
        message: "Enter your Employee ID",
        validate: (employeeId) => {
          if (employeeId) {
            return true;
          } else {
            console.log("You must enter an Employee ID to continue!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "githubUsername",
        message: "Please enter your Github username.",
        validate: (githubUsername) => {
          if (githubUsername) {
            return true;
          } else {
            console.log("You must enter a Github Username to continue!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Please enter your email",
        validate: (email) => {
          if (email) {
            return true;
          } else {
            console.log("You must enter an email to continue!");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      console.log(answers);
      const engineer = new Engineer(
        answers.name,
        answers.employeeId,
        answers.githubUsername,
        answers.email
      );
      teamMembers.push(engineer);
      promptMenu();
    });
};
// Questions for intern
const promptIntern = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of the Intern?",
        validate: (internName) => {
          if (internName) {
            return true;
          } else {
            console.log("You must enter an intern name to continue!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "employeeId",
        message: "Enter your Employee ID",
        validate: (employeeId) => {
          if (employeeId) {
            return true;
          } else {
            console.log("You must enter an Employee ID to continue!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "Please enter your school",
        validate: (school) => {
          if (school) {
            return true;
          } else {
            console.log("You must enter a school name to continue!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "study",
        message: "Please enter your area of study",
        validate: (school) => {
          if (school) {
            return true;
          } else {
            console.log("You must enter a study field to continue!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Please enter your email",
        validate: (email) => {
          if (email) {
            return true;
          } else {
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      console.log(answers);
      const intern = new Intern(
        answers.name,
        answers.employeeId,
        answers.email,
        answers.school,
        answers.study
      );
      teamMembers.push(intern);
      promptMenu();
    });
};


const buildTeam = () => {
  fs.writeFileSync("./dist/team.html", generateSite(teamMembers));
};


promptMenu();






