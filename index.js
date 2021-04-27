const inquirer = require("inquirer");
const fs = require("fs");
const generateTeamProfile = require("./src/teamTemplate.js");

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "project",
      message: "What is the name of your project? (Required)",
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
      name: "description",
      message: "Please enter a description of your project",
    },
    {
      type: "input",
      name: "installation",
      message: "Please provide installation instructions",
    },
    {
      type: "input",
      name: "usage",
      message: "Please provide instructions on how to use this generator",
    },
    {
      type: "input",
      name: "contribution",
      message: "Please provide contribution guidelines",
    },
    {
      type: "input",
      name: "test",
      message: "Please provide instructions on how to test this generator",
    },
    {
      type: "list",
      name: "license",
      message: "Choose one of the following licenses",
      choices: [
        "Boost",
        "MIT",
        "BSD",
        "Apache 2.0",
        "GNU General Public License V3.0",
      ],
    },
    {
      type: "input",
      name: "github",
      message: "Please provide your GitHub Username (Required)",
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
      name: "email",
      message: "Please provide your email",
    },
  ]);
};

const writeFile = readmePage => {
  return fs.writeFileSync("Readme.md", readmePage);
};

promptUser()
  .then(readmeData => {
    return generateReadme(readmeData);
  })
  .then(readmePage => {
    return writeFile(readmePage);
  })
  .catch(err => {
    console.log(err);
  });
