const fs = require("fs");
const path = require("path");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

function HTMLGenerate(employees) {
  const html = [];

  html.push(
    employees
      .filter(employee => employee.role === "Manager")
      .map(manager => managerHTML(manager))
  );

  html.push(
    employees
      .filter(employee => employee.role === "Engineer")
      .map(engineer => engineerHTML(engineer))
  );

  html.push(
    employees
      .filter(employee => employee.role === "Intern")
      .map(intern => internHTML(intern))
  );

  renderIndexHtml(html);
}

function managerHTML(mgr) {
  let manager = new Manager(
    mgr.name,
    mgr.id,
    mgr.email,
    mgr.managerOfficeNumber
  );
  let template = fs.readFileSync(
    path.join(__dirname, "./manager.html"),
    "utf8"
  );
  template = placeholderRegex(template, "name", manager.getName());
  template = placeholderRegex(template, "role", manager.getRole());
  template = placeholderRegex(template, "id", manager.getId());
  template = placeholderRegex(
    template,
    "officeNumber",
    manager.getOfficeNumber()
  );
  template = placeholderRegex(template, "email", manager.getEmail());
  return template;
}

function engineerHTML(eng) {
  let engineer = new Engineer(eng.name, eng.id, eng.email, eng.engineerGithub);
  let template = fs.readFileSync(
    path.join(__dirname, "./engineer.html"),
    "utf8"
  );
  template = placeholderRegex(template, "name", engineer.getName());
  template = placeholderRegex(template, "role", engineer.getRole());
  template = placeholderRegex(template, "id", engineer.getId());
  template = placeholderRegex(template, "github", engineer.getGithub());
  template = placeholderRegex(template, "email", engineer.getEmail());
  return template;
}

function internHTML(intr) {
  let intern = new Intern(intr.name, intr.id, intr.email, intr.internSchool);
  let template = fs.readFileSync(path.join(__dirname, "./intern.html"), "utf8");
  template = placeholderRegex(template, "name", intern.getName());
  template = placeholderRegex(template, "role", intern.getRole());
  template = placeholderRegex(template, "id", intern.getId());
  template = placeholderRegex(template, "school", intern.getSchool());
  template = placeholderRegex(template, "email", intern.getEmail());
  return template;
}

function placeholderRegex(template, placeholder, val) {
  const regexPattern = new RegExp(`!! ${placeholder} !!`, "gm");
  return template.replace(regexPattern, val);
}

function renderIndexHtml(htmlData) {
  let template = fs.readFileSync(path.join(__dirname, "./main.html"), "utf8");
  template = placeholderRegex(template, "htmlPlaceholder", htmlData);
  writeFile(template);
}

function writeFile(data) {
  fs.writeFile(path.join(__dirname, "../crew.html"), data, err => {
    if (err) throw err;
    console.log("Success!");
  });
}

module.exports = { HTMLGenerate };
