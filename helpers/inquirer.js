require("colors");
const inquirer = require("inquirer");
const menuOptions = {
  type: "list",
  name: "option",
  message: "¿Chose an option ?",
  choices: [
    {
      value: "1",
      name: `${"1.".green} Create a task`,
    },
    {
      value: "2",
      name: `${"2.".green} Show tasks`,
    },
    {
      value: "3",
      name: `${"3.".green} Completed tasks`,
    },
    {
      value: "4",
      name: `${"4.".green} Pending tasks`,
    },
    {
      value: "5",
      name: `${"5.".green} Complete a task(s)`,
    },

    {
      value: "6",
      name: `${"6.".green} Delete a task`,
    },
    {
      value: "0",
      name: `${"0.".green} Exit`,
    },
  ],
};

const inquirerMenu = async () => {
  console.clear();
  console.log("=".repeat(20).green);
  console.log("     ToDos MENU".white);
  console.log("=".repeat(20).green + "\n");

  const { option } = await inquirer.prompt(menuOptions);
  return option;
};

const pause = async () => {
  console.log("\n");
  await inquirer.prompt({
    type: "input",
    name: "option",
    message: `Press ${"ENTER".green} to continue`,
  });
};

const userInput = async (message) => {
  const { input } = await inquirer.prompt({
    type: "input",
    name: "input",
    message,
    validate(value) {
      if (value.length === 0) return "Type something to continue ...";
      return true;
    },
  });
  return input;
};

module.exports = { inquirerMenu, pause, userInput };
