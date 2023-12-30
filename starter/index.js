const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
// Always install  "version": "6.5.2", of Inquirer
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
      let createManager = new Manager(
        data.name,
        data.id,
        data.email,
        data.officenumber
      );

      console.log(createManager);

      EmployeeArray.push(createManager);
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
      if (response.options === "Add an Engineer") {
        console.log("Moving to Adding an Engineer!");
        askforEngineerInfo();
      } else if (response.options === "Add an Intern") {
        console.log("Moving to adding an Intern!");
        askforInternInfo();
      } else if (response.options === "Finish Building the Team") {
        render(EmployeeArray).then((data) => {
          fs.writeFile(outputPath, data, (err) => {
            err ? console.log(err) : console.log("Response Appended");
          });
        });
      }
    });
}

function askforEngineerInfo() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the Engineers Name?",
        validate: (val) => /[a-z]/gi.test(val),
      },
      {
        type: "input",
        name: "id",
        message: "Please input the Engineers ID Number",
        validate: (val) => /[1-9]/gi.test(val),
      },
      {
        type: "input",
        name: "email",
        message: "What is the Engineers email?",
        validate: (val) => /[a-z1-9]/gi.test(val),
      },
      {
        type: "input",
        name: "github",
        message: "Please Enter the Engineers Github Username",
        validate: (val) => /[1-9]/gi.test(val),
      },
    ])
    .then((responses) => {
      let createEngineer = new Engineer(
        responses.name,
        responses.id,
        responses.email,
        responses.github
      );

      EmployeeArray.push(createEngineer);
      console.log(EmployeeArray);
      Menu();
    });
}

function askforInternInfo() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the Interns Name?",
        validate: (val) => /[a-z]/gi.test(val),
      },
      {
        type: "input",
        name: "id",
        message: "Please input the Interns ID Number",
        validate: (val) => /[1-9]/gi.test(val),
      },
      {
        type: "input",
        name: "email",
        message: "What is the Interns email?",
        validate: (val) => /[a-z1-9]/gi.test(val),
      },
      {
        type: "input",
        name: "school",
        message: "What School did the Intern go to?",
        validate: (val) => /[a-z1-9]/gi.test(val),
      },
    ])
    .then((Responses) => {
      let createIntern = new Intern(
        Responses.name,
        Responses.id,
        Responses.email,
        Responses.school
      );

      EmployeeArray.push(createIntern);
      console.log(EmployeeArray);
      Menu();
    });
}

aksforManagerInfo();
