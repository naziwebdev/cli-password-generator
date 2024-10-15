const chalk = require("chalk");

const generatePassword = () => {
  let password = "";
  let chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*abcdefghijklmnopqrstuvwxyz0123456789";

  const charsLength = chars.length;

  for (let i = 0; i < 15; i++) {
    password += chars.charAt(Math.floor(Math.random() * charsLength));
  }

  console.log(chalk.bgGreen(`your password : ${password}`));
};

module.exports = generatePassword;
