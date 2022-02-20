require("colors");
const inquirer = require("inquirer");
const menuOptions = {
  type: "list",
  name: "option",
  message: "¿Choose an option?",
  choices: [
    {
      value: "1",
      name: `${"1.".green} Create a task`,
      short: "Type your task below".italic,
    },
    {
      value: "2",
      name: `${"2.".green} Show tasks`,
      short: "List of tasks".italic,
    },
    {
      value: "3",
      name: `${"3.".green} Completed tasks`,
      short: "Completed tasks".italic,
    },
    {
      value: "4",
      name: `${"4.".green} Pending tasks`,
      short: "Pending tasks".italic,
    },
    {
      value: "5",
      name: `${"5.".green} Complete a task(s)`,
      short: "".hidden,
    },

    {
      value: "6",
      name: `${"6.".green} Delete a task`,
    },
    {
      value: "0",
      name: `${"7.".green} Exit`,
      short: "Leaving...".italic,
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
      name: `${list.indexOf(task) + 1}.`.green + ` ${task?.description}`,
    };
  });
  choices.push({
    value: 0,
    name: `${list.length + 1}.`.green + " Exit",
    short: "".hidden,
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

const tasksToChangeStatus = async (list = []) => {
  const choices = list.map((task) => {
    return {
      value: task?.id,
      name: `${list.indexOf(task) + 1}.`.green + ` ${task?.description}`,
      checked: !(task.completedDate === null),
    };
  });

  const questions = {
    type: "checkbox",
    name: "ids",
    message: "Complete a task or tasks",
    choices,
  };
  const { ids } = await inquirer.prompt(questions);
  return ids;
};

module.exports = {
  inquirerMenu,
  pause,
  userInput,
  listOfTasks,
  confirm,
  tasksToChangeStatus,
};
