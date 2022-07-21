const functions = require ('./functions')

describe('my functions', () => {
    test('property adds 7 + 4 to equal 11', () => {
        expect(functions.add(7,4)).toBe(11)
    })
    test('property subtracts 5 - 4 to equal 1', () => {
        expect(functions.subtract(5,4)).toBe(1)
    })
    test('property multiplies 5 * 3 to equal 15', () => {
        expect(functions.multiply(5,3)).toBe(15)
    })
    test('property divides 10 / 2 to equal 5', () => {
        expect(functions.divide(10,2)).toBe(5)
    })
});