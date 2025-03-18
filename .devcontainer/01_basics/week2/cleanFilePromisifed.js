let fs = require('fs');
// function writeCall(err) {
//     if(err) {
//         return;
//     }
//     console.log("File written/cleaned successfully");    
// }
// function callBack(err, content) {
//     if (err) {
//         console.error("Error reading file:", err);
//         return;
//     }
//     console.log("File read properly");
//     fs.writeFile('/workspaces/JavaScript-Introduction/.devcontainer/01_basics/week2/a.txt', content.trim(), 'utf-8', writeCall);
// }
// fs.readFile("/workspaces/JavaScript-Introduction/.devcontainer/01_basics/week2/a.txt", "utf-8", callBack);

function readFile(fileName) { 
    return new Promise(); // returns a promise 
}

const p = readFile("/workspaces/JavaScript-Introduction/.devcontainer/01_basics/week2/a.txt");

function callBack(content) {
    console.log(content);
}

p.then(callBack);