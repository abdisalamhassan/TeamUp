const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const promptInfo = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name1',
            message: 'Emily',
        },
        {
            type: 'input',
            name:'id1',
            message: "what is your id?",
        },
        {
            type: 'input',
            name: 'email1',
            message: 'what is your email?',
        },
        {
            type: 'input',
            name: 'role1',
            message: 'Employee',
        },
        {
            type: 'input',
            name: 'name2',
            message: 'Martin',
        },
        {
            type: 'input',
            name: 'id2',
            message: 'what is your id',
        },
        {
            type: 'input',
            name: 'email2',
            message: 'What is your email',
        },
        {
            type:'input',
            name: 'office',
            message: 'what is your office number',
        },
        {
            type: 'input',
            name: 'role2',
            message: 'Manager',  
        },
        {
            type: 'input',
            name: 'role',
            message: 'Manager',
        },
        {
            type: 'input',
            name: 'name3',
            message: 'Enny',
        },
        {
            type: 'input',
            name: 'id3',
            message: 'What is your id?',
        },
        {
            type: 'input',
            name: 'email3',
            message: 'What is your email',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your Github username',
        },
        {
            type: 'input',
            name: 'role3',
            message: 'Engineer',
        },
        {
            type: 'input',
            name: 'name4',
            message: 'Sam',
        },
        {
            type: 'input',
            name: 'id4',
            message: 'What is your id?',
        },
        {
            type: 'input',
            name: 'email4',
            message: 'Enter your school here',
        },
        {
            type: 'input',
            name: 'role4',
            message: 'intern,'
        },
    ]);
};

const generateHTML = (answers) =>

`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href= "https://
    <title>Document</title>
</head>
<body>
     <div class="p-5 mb-3 bg-danger text-white">
      <p class="fs-1 text-center">My Team</p>
      </div>
    <div class="row row-cols-1 row cols-md-3 g-4">
    <div class="col">
    <div class="card" style="width: 18rem;">
    <div class="card-header bg-primary">
    <p class= "fs-1 text-white">${answers.name1}</p>
    <p class="fs-1 text-white"><svg xmlns="http://www.w3.org/2000/svg" width="16" height ="16
      </body>

</html>`;

const init =() => {
    promptInfo() 
    .then((answers) => writeFileAsync('index.html',generateHTML(answers)))
    .then(()=> console.log(`Succesfully wrote to index.html`))
    .catch((err) => console.error(err));
};

init