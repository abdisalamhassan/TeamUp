const Employee = require("./Employee");

class Engineer extends Employee{
    constructor( name,id,email,githubusername){
        //this.name =name;
        //this.id =id;
        //this.email = email;
        super(name,id,email);
        this.githubusername= githubusername;
    };

     getGithubUsername(){
         return this.githubusername;
     }

    getRole(){
        return "Engineer";
    };
};

module.exports = Engineer;