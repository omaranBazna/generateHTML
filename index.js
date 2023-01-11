import inquirer from "inquirer";
import fs from "fs";
import { template } from "./src/template.js";
//import Manger from "./lib/Manger";
import Manger from "./lib/Manger.js";
//import { Intern } from "./lib/intern.js";

inquirer
  .prompt([
    {
      type: "input",
      name: "mangername",
      message: "what is manger name?",
    },
    {
      type: "input",
      name: "mangeremail",
      message: "what is manger email?",
    },
    {
      type: "input",
      name: "officenum",
      message: "what is the office number of the manger?",
    },

    {
      type: "input",
      name: "engineername",
      message: "what is the engineer name?",
    },
    {
      type: "input",
      name: "engineeremail",
      message: "what is the engineer email?",
    },

    {
      type: "input",
      name: "engineergithub",
      message: "what is the engineer github?",
    },

    {
      type: "input",
      name: "internname",
      message: "what is the engineer name?",
    },
    {
      type: "input",
      name: "internemail",
      message: "what is the intern email?",
    },
    {
      type: "input",
      name: "internschool",
      message: "what is the school email?",
    },
  ])
  .then((answers) => {
    const manger = new Manger(
      answers.mangername,
      1,
      answers.mangeremail,
      answers.officenum
    );
    /*
    const intern = new Intern(
      answers.internname,
      3,
      answers.internemail,
      answers.internschool
    );
*/
    fs.writeFileSync("dist/output.html", template(manger));
  })

  .catch((error) => {
    console.log(error);
  });
