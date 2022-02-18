require("colors");
const { inquirerMenu, pause } = require("./helpers/inquirer");
console.clear();
const main = async () => {
  let option = "";
  let enter = "";

  do {
    option = await inquirerMenu();
    console.log({ option });
    await pause();
  } while (option !== "0");
};

main();
