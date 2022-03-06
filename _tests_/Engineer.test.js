const Engineer = require("../lib/Engineer");

describe("Engineer", ()=>{

    describe("getName", ()=> {
        it("should return the name of the parent object",() => {

            const name = "Emmy"
            expect(name).toEqual(Engineer.name);
        });
    });

    describe("getId",()=> {
        it("should return the ID number of the parent object", ()=> {

            const id = 3
            expect(Id).toEqual(Engineer.id);
        });
    });

    describe("getEmail",()=> {
        it("should return the email address of the parent Object", ()=> {

            const email = "engineer@gmail.com"
            expect(email).toEqual(Engineer.email);
        });
    });
    describe("getRole", ()=> {
        it("should return the role of the parent object", ()=> {

            const role = "Employee"
            expect(role).toEqual(Employee.role);
        });
    });
    
});
