const {even} = require('../src/number');

test ("Check if num is even", () => {
    expect(even(8)).toBeTruthy()
});