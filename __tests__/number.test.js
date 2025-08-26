const {numberOne,numberTwo, numberThree, numberFour, numberFive, numberNine} = require('../src/numbers');
// numbers matchers 
test("test the number variables", () => {
  expect(numberOne).toBeGreaterThan(0);
  expect(numberTwo).toBeLessThan(3);
  expect(numberThree).toBeGreaterThanOrEqual(3);
  expect(numberThree).toBeLessThanOrEqual(3);
  expect(numberFour).toBeCloseTo(4.005);
  expect(numberNine).toBeGreaterThan(2);
});
