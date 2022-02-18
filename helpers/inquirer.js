require("colors");
const inquirer = require("inquirer");
const menuOptions = {
  type: "list",
  name: "option",
  message: "¿Chose an option ?",
  choices: [
    {
      value: "1",
      name: "1. Create a task",
    },
    {
      value: "2",
      name: "2. List of tasks",
    },
    {
      value: "3",
      name: "3. List of completed tasks",
    },
    {
      value: "4",
      name: "4. Complete a task(s)",
    },
    {
      value: "5",
      name: "5. Delete a task",
    },
    {
      value: "0",
      name: "0. Exit",
    },
  ],
};

const inquirerMenu = async () => {
  console.clear();
  console.log("=".repeat(10).green);
  console.log("ToDos MENU".green);
  console.log("=".repeat(10).green + "\n");

  const { option } = await inquirer.prompt(menuOptions);
  return option;
};

const pause = async () => {
  console.log("\n");
  const { option } = await inquirer.prompt({
    type: "input",
    name: "option",
    message: `Press ${"ENTER".green} to continue`,
  });
  return option;
};

module.exports = { inquirerMenu, pause };
