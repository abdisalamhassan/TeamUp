const generateTeam = (team) => {
    console.log(team);
    const html=[];
    const generateManager = manager => {
        console.log(manager);
        let ManagerHtml = `
        <div class "card" style = "width: 18rem;">
         <div class = "card-header">
         ${manager.name} <br/>
         <i class "fas fa-mug-hot"></i>Manager</div>
         <ul class="list-group list-flush">
         <li class="list-group-item">ID; ${manager.id}</li>
         <li class="list-group-item">Email: <span id="email"><a href="mailto:${manager.email}"</a></span></li>
         </ul>
         </div>
        `;
        html.push(ManagerHtml);
    }
    const generateEngineer = engineer => {
        console.log(engineer);
        let engineerHTML = `
        <div class ="card" style="width: 18rem;">
         <div class="card-header">
         ${engineer.name}<br/>
         <i class="fas fa-glasses"></i>Engineer</div>
         <ul class"list-group list group-flush">
         <li class="list-group-item">ID: ${engineer.id}</li>
         <li class="list-group-item">Email: <span id="email"><a href="mailto${engineer.email}">${engineer.email}</a></span></li>
         <li class="list-goup-item"Github Username:<a target="_blank" href="https://github.com/${engineer.githubUsername}">${engineer.githubUsername}</a></li>
          </ul>
        </div>
         `;

        html.push(engineerHTML);
    }
const generateIntern = intern =>{
    console.log(intern);
    let internHTML = `
    <div class="card" style:"width: 18rem;">
     <div class="card-header">
     ${intern.name}<br/>
     <i class= "fas fa-user-graduate"></i>Intern</div>
     <ul class="list-group list-group-flush">
     <li class="list-group-item">ID: ${intern.id}</li>
     <li class="list-group-item">Email:<span id="email><a href="mailto:${intern.email}"${intern.email}</a></span></li>
     <li class="list-group-item"School: ${intern.school}</li>
     </ul>
     </div>
    `;
    html.push(internHTML);
 }

 for(let i=0; i< team.length; i++) {
     if(team[i].getRole()=== "Manager"){
         generateManager(team[i]);
     }
     if(team[i].getRole()=== "Engineer"){
         generateEngineer(team[i]);
     }
     if(team[i].getRole()=== "Intern"){
         generateIntern(team[i]);
     }
 }
 return html.join(''); 
}

module.exports= team => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Team</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <script src="https://kit.fontawesome.com/c502137733.js"></script>
    </head>
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron mb-3 team-heading bg-danger">
                    <h1 class="text-center text-white">My Team</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="row team-area col-12 d-flex justify-content-center">
                    ${generateTeam(team)}
                </div>
            </div>
        </div>
    </body>
    </html>
        `;
}