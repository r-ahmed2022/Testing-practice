const capitalizeString = require('./capitalize')

test('returns riyaz to equal Riyaz', () => {
    expect(capitalizeString('riyaz')).toBe('Riyaz')
})