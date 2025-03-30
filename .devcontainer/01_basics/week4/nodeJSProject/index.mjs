// const chalk = require("chalk"); This will not work Reason: require is not defined in ES module scope
// Now we will be writing a slightly new syntax that is used in JS


import chalk from 'chalk'; // new syntax to import the library
console.log(chalk.blue('Hello, world!'));
console.log(chalk.red.bold('This is an error message.'));
console.log(chalk.green.underline('This is a success message.'));