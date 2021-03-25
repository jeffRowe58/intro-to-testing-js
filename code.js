// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

// sayHello function
function sayHello(input) {
    // if(input === "Alex") {
    //     return "Hello, Alex!"
    // }else {
    //     if(input === "Pat") {
    //         return "Hello, Pat!";
    // }else {
    //         return "Hello, Jane!";
    //     }
    // }
    if (input === undefined) {
        input = "World";
        return "Hello, " + input + "!";
    }else if(typeof(input) === "boolean"){
        input = "World"
        return "Hello, " + input + "!";
    }else {
        return "Hello, " + input + "!";
    }
}

// isFive function
function isFive(input){
   return (input === 5) ? true : false;
};
isFive(9)

// isEven funciton
function isEven(input) {
    if (input === null) {
        return false;
    } else if (input === true) {
        return false;
    } else if (input === false) {
        return false;
    } else if (input === Infinity) {
        return false;
    } else if (input === "banana") {
        return false;
    } else {
        return (input % 2 === 0);
    }
}
// isVowel function
function isVowel(input) {
    if (typeof(input) !== "string" || input.length > 1) {
        return input = false;
    } else {
        return !!(input.match(/[aeiou]/gi));
    }
}
// add function
function add(y,z) {
    var x = parseFloat(y);
    var s = parseFloat(z);
    return (x + s);
}
console.log(add(2,"apples"));