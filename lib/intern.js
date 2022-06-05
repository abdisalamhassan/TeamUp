const Employee = require("./Employee");

class Intern extends Employee{
    constructor( name,id,email,school,study){
        super(name,id,email)
        this.school=school;
        this.study=study;
    };
    
    getSchool(){
        return this.school;
    }

    getRole(){
        return "Intern";
    };
};

module.exports = Intern;