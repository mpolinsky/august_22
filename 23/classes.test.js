const Person = require('./classes').Person;

test('tests Person instantiation and name access',() => {
    p1 = new Person("Mark",1000,"Gold")
    expect(p1.name).toEqual("Mark")
});


test('tests Person guess method returns an int', () => {
    p1 = new Person("Mark",1000,"Gold")
    expect(typeof p1.guess()).toEqual('number')
});
