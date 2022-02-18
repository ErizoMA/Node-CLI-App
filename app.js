require("colors");
const { inquirerMenu } = require("./helpers/inquirer");
console.clear();
const main = async () => {
  let option = "";
  do {
    option = await inquirerMenu();
    console.log({ option });
  } while (option !== "0");
};

main();
