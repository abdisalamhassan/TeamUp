const { TestWatcher } = require("@jest/core");

const Intern = ('../lib/Intern');
const intern = new Intern('Manny','0226652','manuel.024@gmail.com');

test('test if we can get the constructor values for the employee object', ()=> {
    expect(employee.name).toBe('Manuel')
    expect(employee.id).toBe('0226652');
    expect(employee.email).toBe('manuel.024@gmail.com');
});

test ('test if we can get the name from the getName() method',()=> {
    expect(employee.getName()).toBe('Manny');
});

test ('test if we can get the id from the getiD() method',()=> {
    expect(employee.getiD()).toBe('0226652');
});

test ('test if we can get the email from the getEmail() method',()=> {
    expect(employee.getEmail()).toBe('manuel.024@gmail.com');
});

test ('test if we can get the role from the getRole() method',()=> {
    expect(employee.getRole()).toBe('Intern');
});