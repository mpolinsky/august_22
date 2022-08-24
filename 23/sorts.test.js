const bub = require('./sorts').bubble

test('bubble sorting [4,3,2,1] equals [1,2,3,4]', () => {
    expect(bub([4,3,2,1])).toEqual([1,2,3,4]);
});

test('bubble sorting [1,4,3,5,6,3,2,1] equals [1,1,2,3,3,4,5,6]', () => {
    expect(bub([1,4,3,5,6,3,2,1])).toEqual([1,1,2,3,3,4,5,6]);
});

test('bubble sorting [1,0,0,0,0,0] equals [0,0,0,0,0,1]', () => {
    expect(bub([1,0,0,0,0,0])).toEqual([0,0,0,0,0,1]);
});
