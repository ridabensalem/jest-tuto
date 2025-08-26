const { primeNumbers, average} = require('../src/array');

test ("Check if this array contain only prime numbers", () => {
    expect(primeNumbers).toBeTruthy()
});

test ("Test the average of arr is grater than 10", () => {
    expect(average).toBeGreaterThan(10)
});