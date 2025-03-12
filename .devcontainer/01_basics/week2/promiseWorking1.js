function random(resolve) {
    setTimeout(resolve, 3000);
}

let p = new Promise(random);

// using the promise
function main() {
    console.log("promise is succeeded");
}
p.then(main); // main will be called whenever the promise is fulfilled

// And when will the promise get fulfilled:
// It will be fulfilled when: the first arg of the argument of the Promise class is called 
// which is here called after 3 sec. (resolve function is called after 3 sec)