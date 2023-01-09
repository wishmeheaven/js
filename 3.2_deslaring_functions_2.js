/*
JavaScript - Declaring Functions
The following exercise contains the following
subjects:
// * functions
Instructions
* Please reformat the following function
expressions to IIFE functions.
* Please reformat the following function
declarations in two ways, explicit return and implicit
return functions.
Submit the file to Hive
*/

// From function declarations to explicit and implicit return functions(one of each).
// function welcome() {
//     let welcome = 'Welcome to Appleseeds Bootcamp!';
//     return welcome;
// }
// function power(a) {
//     let myNumber = a;
//     let result = Math.pow(myNumber, 2);
//     return result;
// }

const welcomeExpl = function(){
    return 'Welcome to Appleseeds Bootcamp!';
}

console.log("welcomeExpl()", welcomeExpl());

const welcomeImpl = () => 'Welcome to Appleseeds Bootcamp!';

console.log("welcomeImpl()", welcomeImpl());

const powerExp = function(a) {
    return Math.pow(a, 2);
}
console.log("powerExp(2)", powerExp(2));

const powerImpl = a => Math.pow(a, 2);

console.log("powerImpl(2)", powerImpl(2));

// From function expressions to IIFE functions.
// const squareRoot = a => Math.sqrt(a);
// const randomNumbers = (a, b) => Math.random() * (a - b) + b;


const squareRoot = (function (a) {
    return Math.sqrt(a);
})(3);

console.log("squareRoot", squareRoot);

const squareRoot2 = ((a) => Math.sqrt(a))(3);

console.log("squareRoot2", squareRoot2);

const randomNumbers = (function (a, b){
    return Math.random() * (a - b) + b;
})(1, 9);

console.log("randomNumbers", randomNumbers);

const randomNumbers2 = ((a, b) => Math.random() * (a - b) + b)(1, 9);

console.log("randomNumbers2", randomNumbers2);

