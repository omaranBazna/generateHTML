import inquirer from "inquirer";
import fs from "fs";
//import Manger from "./lib/Manger";

inquirer
  .prompt([
    {
      type: "input",
      name: "mangername",
      message: "what is manger name?",
    },
    {
      type: "input",
      name: "mangerid",
      message: "what is manger id?",
    },
    {
      type: "input",
      name: "mangeremail",
      message: "what is manger email?",
    },
  ])
  .then((answers) => {
    /*
    const manger = new Manger(
      answers.mangername,
      answers.mangerid,
      answers.mangeremail
    );
    */

    fs.writeFileSync(
      "dist/output.html",
      `
      <style>
        .box{
            background:blue;
            border-radius:5px;
            padding:15px;
        }
      </style>
      <div class="box">
      <h1>Manger</h1>
     <h3>${answers.mangername} </h3>
     <h3>${answers.mangerid}</h3>

     <h3>${answers.mangeremail}</h3>
     <div>

    `
    );
  })

  .catch((error) => {
    console.log(error);
  });
