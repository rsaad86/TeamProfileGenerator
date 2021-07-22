const Manager = require("../lib/Manager");

test("creates a manager object", () => {
  const manager = new Manager("Dave", 5, "dave@gmail.com", 2);

  expect(manager.name).toBe("Dave");
  expect(manager.id).toBe(5);
  expect(manager.email).toBe("dave@gmail.com");
  expect(manager.officeNumber).toBe(2);
});

test("gets manager role", () => {
  const manager = new Manager("Dave", 5, "dave@gmail.com", 2);

  expect(manager.getRole()).toBe("Manager");
});

test("gets manager name", () => {
  const manager = new Manager("Dave", 5, "dave@gmail.com", 2);

  expect(manager.getName()).toBe("Dave");
});

test("gets manager ID", () => {
  const manager = new Manager("Dave", 5, "dave@gmail.com", 2);

  expect(manager.getId()).toBe(5);
});

test("gets manager email", () => {
  const manager = new Manager("Dave", 5, "dave@gmail.com", 2);

  expect(manager.getEmail()).toBe("dave@gmail.com");
});

test("gets manager role", () => {
  const manager = new Manager("Dave", 5, "dave@gmail.com", 2);

  expect(manager.getRole()).toBe("Manager");
});
