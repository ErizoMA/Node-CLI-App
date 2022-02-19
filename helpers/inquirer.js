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

const listOfTasks = async (list = []) => {
  const choices = list.map((task) => {
    return {
      value: task.id,
      name: `${list.indexOf(task) + 1}.`.green + ` ${task.description}`,
    };
  });
  const questions = {
    type: "list",
    name: "id",
    message: "Choose a task to delete",
    choices,
  };
  const { id } = await inquirer.prompt(questions);
  return id;
};

const confirm = async (message) => {
  const { ok } = await inquirer.prompt({
    type: "confirm",
    name: "ok",
    message,
  });
  return ok;
};

module.exports = { inquirerMenu, pause, userInput, listOfTasks, confirm };
