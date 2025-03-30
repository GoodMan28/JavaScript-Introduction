// const chalk = require("chalk"); This will not work Reason: require is not defined in ES module scope
// Now we will be writing a slightly new syntax that is used in JS


import chalk from 'chalk'; // new syntax to import the library
console.log(chalk.blue('Hello, world!'));
console.log(chalk.red.bold('This is an error message.'));
console.log(chalk.green.underline('This is a success message.'));



// We don't need to push the whole bulky node modules folder to github. 
// The person who sees the package can simply run "npm install" in the cli anc all the dependencies will be installed