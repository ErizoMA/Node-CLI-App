require("colors");
const {
  inquirerMenu,
  pause,
  userInput,
  listOfTasks,
  confirm,
  tasksToChangeStatus,
} = require("./helpers/inquirer");
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
        description = await userInput("Task: ");
        tasks.createTask(description);
        break;
      case "2":
        tasks.allTasks();
        break;
      case "3":
        tasks.tasksByStatus(true);
        break;
      case "4":
        tasks.tasksByStatus(false);
        break;
      case "5":
        const ids = await tasksToChangeStatus(tasks.listArray);
        tasks.toggleTasks(ids);
        break;
      case "6":
        const id = await listOfTasks(tasks.listArray);
        if (id !== 0) {
          const confirmed = await confirm("Are you sure?");
          if (confirmed) {
            tasks.deleteTask(id);
            console.log("Task deleted correctly");
          }
        }
        break;
      default:
        break;
    }
    saveData(tasks.listArray);

    await pause();
  } while (option !== "0");
};

main();
