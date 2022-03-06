const { TestWatcher } = require('@jest/core');
const Manager = require('../lib/manager');
const manager = new Manager('Mikey', '0247751','michelangelo.024@gmail.com');

test('test if we can get the constructor values for the employee object', ()=> {
    expect(employee.name).toBe('Mikey')
    expect(employee.id).toBe('0247741');
    expect(employee.email).toBe('michelangelo.024@gmail.com');
});

test ('test if we can get the name from the getName() method',()=> {
    expect(employee.getName()).toBe('Mikey');
});

test ('test if we can get the id from the getiD() method',()=> {
    expect(employee.getiD()).toBe('0247751');
});

test ('test if we can get the email from the getEmail() method',()=> {
    expect(employee.getEmail()).toBe('michelangelo.024@gmail.com');
});

test ('test if we can get the role from the getRole() method',()=> {
    expect(employee.getRole()).toBe('Manager');
});