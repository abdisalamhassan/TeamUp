const Employee = require('./Employee');

class Manager extends Employee { 
    constructor(name,id,email,officeNumber,department){
        super(name,id,email);
        this.officeNumber =officeNumber;
        this.department = department;
    };
    getOfficeNumber() {
        return this.officeNumber;
    }
   
    getRole(){
        return "Manager";
    };
};

module.exports = Manager;