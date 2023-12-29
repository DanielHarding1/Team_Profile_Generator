const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = import("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const pageTemplate = require("./src/page-template.js");

// TODO: Write Code to gather information about the development team members, and render the HTML file.

let EmployeeArray = [];

function aksforManagerInfo() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the Team Mangers Name?",
        validate: (val) => /[a-z]/gi.test(val),
      },
      {
        type: "input",
        name: "id",
        message: "Please input the Team Mangers ID Number",
        validate: (val) => /[1-9]/gi.test(val),
      },
      {
        type: "input",
        name: "email",
        message: "What is the Team Mangers email?",
        validate: (val) => /[a-z1-9]/gi.test(val),
      },
      {
        type: "input",
        name: "officenumber",
        message: "Please Enter the Team Mangers Office Number",
        validate: (val) => /[1-9]/gi.test(val),
      },
    ])
    .then((data) => {
      let newManager = data;
      EmployeeArray = [...newManager];
      Menu();
    });
}

function Menu() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "options",
        message: "Choose One From This List - ",
        choices: [
          "Add an Engineer",
          "Add an Intern",
          "Finish Building the Team",
        ],
      },
    ])
    .then((response) => {
      const choice = response;
      console.log(choice);
    });
}

// const dataWrite = pageTemplate(data);
// fs.writeFile(outputPath, dataWrite, (err) => {
//   err ? console.log(err) : console.log("Response Appended");
// });

// aksforManagerInfo();
Menu();
