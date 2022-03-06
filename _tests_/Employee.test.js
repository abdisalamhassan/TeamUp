const Employee = require("../lib/Employee");

describe("Employee", () =>{

    describe("getName", ()=> {
        it("should return the name of the parent Object", ()=> {

            const name = "Emily"
            expect(name).toEqual(Employee.name);
        });
    });

   describe("getId", () => {
       it("should return the ID number of the parent object", () =>{

        const id = 1
        expect(id).toEqual(Employee.id);
       });
   });

   describe("getEmail", ()=> {
       it("should return the email address of the parent object", ()=> {

        const email = "employee@gmail.com"
        expect(email).toEqual(Employee.email);
       });
   });
   describe("getRole",()=> {
       it("should return the role of the parent object",()=>{

        const
       });
   });
});