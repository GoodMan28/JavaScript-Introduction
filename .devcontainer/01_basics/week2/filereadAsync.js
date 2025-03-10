// Here, we pass in a function as an argument
// This function is called a callback since the function gets called back when the file is read 

let fs = require("fs")

// // Method 1
// fs.readFile(".devcontainer/01_basics/week2/a.txt", "utf-8", function (err, contents) {
//     console.log(contents);
// });

// Method 2
function callback(err, contents) {
    if(err) {
        console.log("Error is: " + err);
    }
    else {
        console.log(contents);
    }
}

fs.readFile(".devcontainer/01_basics/week2/a.txt", "utf-8", callback);