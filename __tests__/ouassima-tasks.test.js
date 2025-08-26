const { shoppingCart, order} = require("../src/ouassima-tasks")


test('should have more than 3 items in the shopping cart  ', () => { 
    expect(shoppingCart.length).toBeGreaterThan(3)
 })

 test("Math.sqrt(81) should be approximately 9",() => {
    expect(Math.sqrt(81)).toBeCloseTo(9)
 })

 test('order should have totalPrice greater than 100', () => {
    expect(order.totalPrice).toBeGreaterThan(100)
 })

 test("item of of order should be neither null nor empty", () => {
    expect(order.item).not.toBeNull()
    expect(order.item).not.toBe("")
 })

 test('string should not be null or empty', () => {
    const str = "Hello, World!"
    expect(str).not.toBeNull() 
    expect(str).not.toBe("")
 })