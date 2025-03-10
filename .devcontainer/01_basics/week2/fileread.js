// I/O (Input/Output) heavy operations refer to tasks in a computer program that 
// involve a lot of data transfer between the program and external systems or devices. 
// These operations usually require waiting for data to be read from or written to sources like 
// disks, networks, databases, or other external devices, 
// which can be time-consuming compared to in-memory computations.

// Examples are:
// 1. Reading a file: that comes under the category of I/O operation from disk
// 2. HTTP Requests: Requesting resources from the URL
// 3. Starting a clock: eg. wait(1) this also takes a lot of time

// A "require" statement lets you import code/functions export from another file/module.

const fs = require("fs") // this is the import/require statement
let contents1 = fs.readFileSync(".devcontainer/01_basics/week2/a.txt","utf-8"); // the first arg is the filename and the 
// second arg is the CHAR ENCODING STANDARD used
console.log(contents1);

// printing the contents of other file along with the previous file synchronously
let contents2 = fs.readFileSync(".devcontainer/01_basics/week2/b.txt", "utf-8");
console.log(contents2);



