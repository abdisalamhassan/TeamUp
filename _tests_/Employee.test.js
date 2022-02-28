const { expect } = require("@jest/globals");
const { test } = require("picomatch");
const Employee = require("../lib/Employee");

describe("testing the fields and methods of employee class", ()=>{
    test("create empty employee object", () => {
        const employee = new Employee();
        expect(typeof employee ).toBe("object");
    });
    test("Employee.getName() return employee name", ()=>{
        const employee = new Employee("bob", "1234", "employee@gmail.com");
        expect(employee.getName().toBe("Bob"));
    });
    test("Employee.getID() return employee ID", ()=>{
        const employee = new Employee("bob", "1234", "employee@gmail.com");
        expect(employee.getID().toBe("1234"));
    });
    test("Employee.getEmail() return employee email", ()=>{
        const employee = new Employee("bob", "1234", "employee@gmail.com");
        expect(employee.getEmail().toBe("employee@gmail.com"));
    });
    test("Employee.getRole() return employee role", ()=>{
        const employee = new Employee("bob", "1234", "employee@gmail.com");
        expect(employee.getRole().toBe("Employee"));
    });
});