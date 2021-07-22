const inquirer = require("inquirer");
const render = require("./src/page-template");

const employeesArr = [];

function init() {
  let employeeObj = {};
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please enter the employee's name: ",
        validate: nameInput => {
          if (nameInput) {
            return true;
          }
          console.log("Please enter the employee's name");
          return false;
        },
      },
      {
        type: "input",
        name: "id",
        message: "Please enter the employee's ID: ",
        validate: idInput => {
          if (idInput) {
            return true;
          }
          console.log("Please enter the employee's ID");
          return false;
        },
      },
      {
        type: "input",
        name: "email",
        message: "Please enter the employee's email address: ",
        validate: emailInput => {
          if (emailInput) {
            return true;
          }
          console.log("Please enter the employee's email address");
          return false;
        },
      },
      {
        type: "list",
        name: "role",
        message: "What is the employee's role?",
        choices: ["Manager", "Engineer", "Intern"],
      },
    ])
    .then(data => {
      // data from first inquirer prompt for basic information
      employeeObj = { ...data };

      if (data.role === "Manager") {
        return inquirer.prompt({
          type: "input",
          name: "managerOfficeNumber",
          message: "Please enter the manager's office number: ",
          validate: officeNumberInput => {
            if (officeNumberInput) {
              return true;
            }
            console.log("Please enter the manager's office number");
            return false;
          },
        });
      } else if (data.role === "Engineer") {
        return inquirer.prompt({
          type: "input",
          name: "engineerGithub",
          message: "Please enter the engineer's GitHub username: ",
          validate: engineerGithub => {
            if (engineerGithub) {
              return true;
            }
            console.log("Please enter the engineer's GitHub username");
            return false;
          },
        });
      } else if (data.role === "Intern") {
        return inquirer.prompt({
          type: "input",
          name: "internSchool",
          message: "Please enter the intern's school name: ",
          validate: internSchool => {
            if (internSchool) {
              return true;
            }
            console.log("Please enter the intern's school name!");
            return false;
          },
        });
      }
    })
    .then(roleData => {
      // data from second inquirer prompt for role information
      employeeObj = { ...employeeObj, ...roleData };
      employeesArr.push(employeeObj);
      console.log(employeesArr);

      return inquirer.prompt({
        type: "confirm",
        name: "addMoreEmployees",
        message: "Would you like to enter another employee? ",
        default: true,
      });
    })
    .then(addEmployee => {
      if (addEmployee.addMoreEmployees) {
        init();
      } else {
        console.log(`Employees have been entered!`);

        render.HTMLGenerate(employeesArr);
        console.log("You can view the team by using crew.html");
      }
    })
    .catch(err => {
      if (err) throw Error;
    });
}

init();
