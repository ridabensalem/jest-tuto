const {user, checker} = require('../src/object');

test("Check if the user object has both name and email and that email icludes @ symbol", () => {
    expect(user.name).toBe("Hamza");
    expect(user.email).toBe("hamzaoyosf@gmail.com");
    expect(checker).toBeTruthy();
});