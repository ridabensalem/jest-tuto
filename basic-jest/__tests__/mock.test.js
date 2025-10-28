const {divideBill, sayMessage}= require("../src/mock");
// calling the real function 

test("divides the bill correctly", () => {
  expect(divideBill(100, 4)).toBe(25);
});

test("says Free Palestine", () => {
  expect(sayMessage()).toBe("Free Palestine");
});

// mocking example

test("mock divideBill function", () => {
  const mockDivide = jest.fn().mockReturnValue(50);

  expect(mockDivide(100, 2)).toBe(50);
  expect(mockDivide).toHaveBeenCalledTimes(1);
  expect(mockDivide).toHaveBeenCalledWith(100, 2);
});

test("mock sayMessage function", () => {
  const mockMessage = jest.fn().mockReturnValue("Free Palestine");

  expect(mockMessage()).toBe("Free Palestine");
  expect(mockMessage()).toHaveBeenCalledTimes(1);
});