let fs = require('fs');
function writeCall(err) {
    console.log("File written/cleaned successfully");
    console.log("New content: ");
    console.log();
    
}
function callBack(err, content) {
    console.log("File read properly");
    fs.writeFile('.devcontainer/01_basics/week2/a.txt', content.trim(), 'utf-8', writeCall);
}
let content = fs.readFile(".devcontainer/01_basics/week2/a.txt", "utf-8", callBack);
