// 3. Create a test that ensures an object `{ name: "Reda" }` has the key `name`.  


const person = { name: "Reda" };
test('object has the key name', () => {

    expect(person).toHaveProperty("name");

});