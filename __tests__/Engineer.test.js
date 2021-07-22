const Engineer = require("../lib/Engineer");

test("creates an engineer object", () => {
  const engineer = new Engineer("Dave", 5, "dave@gmail.com", "DaveGH");

  expect(engineer.name).toBe("Dave");
  expect(engineer.id).toBe(5);
  expect(engineer.email).toBe("dave@gmail.com");
  expect(engineer.github).toBe("DaveGH");
});

test("gets engineer name", () => {
  const engineer = new Engineer("Dave", 5, "dave@gmail.com", "DaveGH");

  expect(engineer.getName()).toBe("Dave");
});

test("gets engineer ID", () => {
  const engineer = new Engineer("Dave", 5, "dave@gmail.com", "DaveGH");

  expect(engineer.getId()).toBe(5);
});

test("gets engineer email", () => {
  const engineer = new Engineer("Dave", 5, "dave@gmail.com", "DaveGH");

  expect(engineer.getEmail()).toBe("dave@gmail.com");
});

test("gets engineer role", () => {
  const engineer = new Engineer("Dave", 5, "dave@gmail.com", "DaveGH");

  expect(engineer.getRole()).toEqual(expect.any(String));
});

test("gets enginner github", () => {
  const engineer = new Engineer("Dave", 5, "dave@gmail.com", "DaveGH");

  expect(engineer.getGithub()).toBe("DaveGH");
});
