const stringLength = require('./stringlength');
test('counts hello is equal to 5', ()=> {
    expect(stringLength('Hello')).toBe(5);
});