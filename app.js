require("colors");
const { inquirerMenu, pause, userInput } = require("./helpers/inquirer");
const { saveData, readData } = require("./helpers/store");
const Tasks = require("./models/tasks");
console.clear();
const main = async () => {
  let option = "";
  const tasks = new Tasks();
  const tasksFromDB = readData();
  if (tasksFromDB) {
    tasks.loadTasks(tasksFromDB);
  }

  do {
    option = await inquirerMenu();
    switch (option) {
      case "1":
        description = await userInput("What task would you like to add ...");
        tasks.createTask(description);
        break;
      case "2":
        console.log(tasks.listArray);
        break;

      default:
        break;
    }
    saveData(tasks.listArray);

    await pause();
  } while (option !== "0");
};

main();
