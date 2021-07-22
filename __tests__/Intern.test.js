const Intern = require("../lib/Intern");

test("creates new intern", () => {
  const intern = new Intern("Dave", 5, "dave@gmail.com", "ABC School");

  expect(intern.name).toBe("Dave");
  expect(intern.id).toBe(5);
  expect(intern.email).toBe("dave@gmail.com");
  expect(intern.school).toBe("ABC School");
});

test("gets intern name", () => {
  const intern = new Intern("Dave", 5, "dave@gmail.com", "ABC School");

  expect(intern.getName()).toBe("Dave");
});

test("gets intern ID", () => {
  const intern = new Intern("Dave", 5, "dave@gmail.com", "ABC School");

  expect(intern.getId()).toBe(5);
});

test("gets intern email", () => {
  const intern = new Intern("Dave", 5, "dave@gmail.com", "ABC School");

  expect(intern.getEmail()).toBe("dave@gmail.com");
});

test("gets intern role", () => {
  const intern = new Intern("Dave", 5, "dave@gmail.com", "ABC School");

  expect(intern.getRole()).toBe("Intern");
});

test("gets intern school", () => {
  const intern = new Intern("Dave", 5, "dave@gmail.com", "ABC School");

  expect(intern.getSchool()).toBe("ABC School");
});
