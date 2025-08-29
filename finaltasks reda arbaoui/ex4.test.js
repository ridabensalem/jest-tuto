// 4. Write a test that checks if the string `"hello"` is truthy.

// ------In JavaScript, any non-empty string ("") is truthy.-----

const greeting = "hello";
test('"hello" is truthy', () => {

    expect(greeting).toBeTruthy();

});
