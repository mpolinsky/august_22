const fib = require('./bonacci').fib
const contains = require('./bonacci').contains
const verify_string = require('./bonacci').verify_string


test('bonacci returns an int',() => {
    expect(typeof fib(0)).toBe('number')
});

test('bonacci returns 0 for input 0',() => {
    expect(fib(0)).toEqual(0)
});


test('bonacci returns 1 for input 1',() => {
    expect(fib(1)).toEqual(1)
});

test('bonacci returns 1 for input 2',() => {
    expect(fib(2)).toEqual(1)
});


// This worked initially with i as the loop variable
// then at some point I added the nested func to the test
// after the next and added two if checks to the fib func and
// this stopped working.  Changing loop var to p fixed it.
test('checks many in/out pairs', () => {
    PAIRS = [4,3,7,13,8,21,9,34]
    for (p=0, ii=PAIRS.length; p<ii; p+=2){
        expect(fib(PAIRS[p])).toEqual(PAIRS[p+1])
        }
});


test('check rejects string input',() => {
    expect(() => {
        fib('Corpuscle accenture').toThrow("NaN")
    })
});


test('check rejects decimal input',() => {
    expect(() => {
        fib(9.99).toThrow("Integers only, please.");
    })
});

// Time it?

