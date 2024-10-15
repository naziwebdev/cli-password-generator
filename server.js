const yargs = require("yargs");
const generatePassword = require("./utils/generatePassword");

yargs.command({
  command: "generate",
  describe: "generate random password",
  handler: () => {
    generatePassword();
  },
});

yargs.parse();
