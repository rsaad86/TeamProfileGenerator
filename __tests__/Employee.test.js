const Employee = require("../lib/Employee");

test("checks to see if Employee exists", () => {
  const employee = new Employee("Dave", 5, "dave@gmail.com");

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

test("gets employee name", () => {
  const employee = new Employee("Dave", 5, "dave@gmail.com");

  expect(employee.getName()).toBe("Dave");
});

test("gets employee ID", () => {
  const employee = new Employee("Dave", 5, "dave@gmail.com");

  expect(employee.getId()).toBe(5);
});

test("gets employee email", () => {
  const employee = new Employee("Dave", 5, "dave@gmail.com");

  expect(employee.getEmail()).toBe("dave@gmail.com");
});

test("gets employee role", () => {
  const employee = new Employee("Dave", 5, "dave@gmail.com");

  expect(employee.getRole()).toEqual(expect.any(String));
});
