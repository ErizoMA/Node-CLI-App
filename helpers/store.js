const fs = require("fs");
const path = "./database/data.json";

const saveData = (data) => {
  fs.writeFileSync(path, JSON.stringify(data));
};

const readData = () => {
  if (!fs.existsSync(path)) return null;
  const information = fs.readFileSync(path, { encoding: "utf-8" });
  const data = JSON.parse(information);
  console.log(data);
  return data;
};

module.exports = {
  saveData,
  readData,
};
