require("colors");
const Task = require("./task");

class Tasks {
  constructor() {
    this._list = {};
  }

  get listArray() {
    const list = [];
    Object.keys(this._list).forEach((key) => {
      const task = this._list[key];
      list.push(task);
    });
    return list;
  }

  loadTasks(list = []) {
    list.forEach((task) => (this._list[task.id] = task));
  }
  createTask(description) {
    const task = new Task(description);
    this._list[task.id] = task;
  }

  allTasks() {
    this.listArray.map((task) => {
      console.log(
        `${(this.listArray.indexOf(task) + 1).toString().green}. ${
          task.description
        } :: ${task.completedDate ? "Completed".green : "Pending".red}`
      );
    });
  }

  tasksByStatus(completed = true) {
    const filteredTasks = this.listArray.filter((task) =>
      completed ? task.completedDate !== null : task.completedDate === null
    );

    filteredTasks.map((task) => {
      console.log(
        `${(filteredTasks.indexOf(task) + 1).toString().green}. ${
          task.description
        } :: ${task.completedDate ? "Completed".green : "Pending".red}`
      );
    });
  }
  deleteTask(id) {
    if (this._list[id]) {
      delete this._list[id];
    }
  }
}

module.exports = Tasks;
