
// 1. Create a test that checks if an array `["cat", "dog", "fish"]` contains `"dog"`.  


const animals = ["cat", "dog", "fish"];

test('array contains "dog"', () => {

    expect(animals).toContain("dog");

});