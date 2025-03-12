// File reading async
const { error } = require("console");
const fs = require("fs");
// defining the callBack
function readCallback(err, content) {
    if(err) {
        console.log("Issue occured!: " + err);    
    }
    else {
        console.log(content);
    }
}

fs.readFile(".devcontainer/01_basics/week2/a.txt", "utf-8", readCallback);


fs.readFile(".devcontainer/01_basics/week2/b.txt", "utf-8", function (err, content) {
    console.log(content);
});