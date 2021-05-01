const inquirer = require("inquirer");
const fs = require("fs");
const generateTeamProfile = require("./src/teamTemplate.js");
// const { choices } = require("yargs");

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "manager",
      message: "What is the manager's name? (Required)",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          return false;
        }
      },
    },
    {
      type: "input",
      name: "employeeID",
      message: "Please enter the manager's employee ID",
    },
    {
      type: "input",
      name: "email",
      message: "Please provide the manager's email address",
    },
    {
      type: "input",
      name: "office",
      message: "Please enter the manager's office number",
    },
    {
      type: "list",
      name: "addMember",
      message: "Would you like to add an Engineer or Intern to your team?",
      choices: ["Engineer", "Intern", "Finish team building"],
    },
  ]);
};
//

const engineerPrompt = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "engineerName",
      message: "Please enter the Engineer's name",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          return false;
        }
      },
    },
    {
      type: "input",
      name: "engineerID",
      message: "Please enter the Engineer's ID",
    },
    {
      type: "input",
      name: "engineerEmail",
      message: "Please enter the Engineer's email",
    },
    {
      type: "input",
      name: "engineerGitHub",
      message: "Please enter the Engineer's Github Username",
    },
    {
      type: "list",
      name: "addMember",
      message: "Would you like to add another Engineer or Intern to your team?",
      choices: ["Engineer", "Intern", "Finish team building"],
    },
  ]);
};

const internPrompt = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "internName",
      message: "Please enter the Intern's name",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          return false;
        }
      },
    },
    {
      type: "input",
      name: "internID",
      message: "Please enter the Intern's ID",
    },
    {
      type: "input",
      name: "internEmail",
      message: "Please enter the Intern's school",
    },
    {
      type: "list",
      name: "addMember",
      message: "Would you like to add another Intern or Engineer to your team?",
      choices: ["Engineer", "Intern", "Finish team building"],
    },
  ]);
};

const writeFile = teamPage => {
  return fs.writeFileSync("", teamPage);
};

promptUser()
  .then(teamData => {
    console.log(teamData);
    return engineerPrompt();

    //return generateTeamProfile(teamData);
  })
  .then(teamData => {
    console.log(teamData);
    console.log(inquirer.choices);
    return internPrompt();
  })
  .then(teamPage => {
    console.log(teamPage);
    //return writeFile(teamPage);
  })
  .catch(err => {
    console.log(err);
  });
