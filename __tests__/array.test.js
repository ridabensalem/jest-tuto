const {islamPrayers}=require('../src/array');

test("test the Islamic prayers array", () => {
  expect(islamPrayers).toHaveLength(5);
  expect(islamPrayers).toContain("Fajr");
});
