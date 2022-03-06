class Employee{
    constructor( name,id,email){
        this.name =name;
        this.id =id;
        this.email = email;
    };

    getName() {
        console.log(`Name: ${this.name}`);
    };

    getId(){
        console.log(`Id: ${this.Id}`);
    };

    getEmail(){
        console.log(`Email: ${this.email}`);
    };

    getRole(){
        console.log(`Employee: ${this.Employee}`);
    };
}