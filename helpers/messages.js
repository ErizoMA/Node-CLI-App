require("colors");
// This might be a tedious way to create a CLI interface with node, thats why we will be using inquirer
const showMenu = () => {
  console.clear();
  console.log("=".repeat(16).green);
  console.log("Choose an option".green);
  console.log("=".repeat(16).green + "\n");
  console.log(`${"1.".green}Create a task`);
  console.log(`${"2.".green}List of tasks`);
  console.log(`${"3.".green}List of completed tasks`);
  console.log(`${"4.".green}List of uncompleted tasks`);
  console.log(`${"5.".green}Complete a task(s)`);
  console.log(`${"6.".green}Delete a task`);
  console.log(`${"7.".green}Exit\n`);

  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question("Choose an option: ", (option) => {
    readline.close();
  });
};

const pause = () => {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question(`Press ${"ENTER".green} to continue`, (option) => {
    readline.close();
  });
};

module.exports = {
  showMenu,
  pause,
};
