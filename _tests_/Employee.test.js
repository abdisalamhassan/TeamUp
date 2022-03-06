const { TestWatcher } = require("@jest/core");
const Employee = require("../lib/Employee");

const Employee = new Employee ('Connor','0236651', 'connor.023@gmail.com');

test('test if we can get the constructor values for the employee object', ()=> {
    expect(employee.name).toBe('Connor')
    expect(employee.id).toBe('0236651');
    expect(employee.email).toBe('connor.023@gmail.com');
});

test ('test if we can get the name from the getName() method',()=> {
    expect(employee.getName()).toBe('Connor');
});

test ('test if we can get the id from the getiD() method',()=> {
    expect(employee.getiD()).toBe('0236651');
});

test ('test if we can get the email from the getEmail() method',()=> {
    expect(employee.getEmail()).toBe('connor.023@gmail.com');
});

test ('test if we can get the role from the getRole() method',()=> {
    expect(employee.getRole()).toBe('Employee');
});