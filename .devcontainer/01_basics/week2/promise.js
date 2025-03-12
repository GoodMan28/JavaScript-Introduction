// A Promise in JavaScript is an object that represents the eventual completion (or failure) 
// of an asynchronous operation and its resulting value.

function waitFor3S(resolve) {
    setTimeout(resolve, 3000);
}

function setTimeoutPromisified() {
    return new Promise(waitFor3S); // whatever arg we passed in Promise() class, 
    // the first argument of that arg when called upon then the main will be called

    // so after 3 sec the resolve is called, so whatever we have passed in the .then() will be called
}

function main() {
    console.log("main is called");
}

setTimeoutPromisified().then(main);