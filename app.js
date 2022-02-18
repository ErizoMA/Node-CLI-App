require("colors");
const { inquirerMenu, pause, userInput } = require("./helpers/inquirer");
const Task = require("./models/task");
const Tasks = require("./models/tasks");
console.clear();
const main = async () => {
  let option = "";
  const tasks = new Tasks();

  do {
    option = await inquirerMenu();
    switch (option) {
      case "1":
        description = await userInput("What task would you like to add ...");
        tasks.createTask(description);
        break;
      case "2":
        console.log(tasks._list);
        console.log(tasks.listArray);
        break;

      default:
        break;
    }

    await pause();
  } while (option !== "0");
};

main();
