const S = require('./p').message;

test(
    'tests message',
    () => {
        m = S()
        expect(m).toBe('hello')
    });
