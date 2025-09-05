const { add, subtract, multiply, isEven, isOdd } = require('../src/math');
// expect is an assertion. 

test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
});

test('subtracts 5 - 3 to equal 2', () => {
    expect(subtract(5, 3)).toBe(2);
});

test('multiplcation of 2 * 3 equal 6', () => {
    expect (multiply(2, 3)).toBe(6);
});

test("Check if the number is Even", () => {
    expect (isEven(7)).toBe(false);
});

test ("Check if the number is Odd", () => {
    expect (isOdd(7)).toBe(true);
});
