'use strict'
/*
Answer the following questions:
Question 1:
In your own words what will this point to and why?
(Note this is the global scope)
console.log(this);
---------------
this will point to the window because it is the global this.
The global this is the window object.
window===globalThis // globalThis===this // window===this
================

Question 2:
a. In your own words what will this point to and why?
b. How can you fix this code?
const myObj = {
name: "Timmy",
greet: () => {
console.log(`Hello ${this.name}`);
},
};
myObj.greet();
----------------
a. this will point to the window which is the global this
due to the arrow function.
b. We may fix it by using a function expression instead of the arrow function.
greet: function() {
    console.log(`Hello ${this.name}`);
}
================

Question 3:
In your own words what will this point to and why?
const myFuncDec = function () {
console.log(this);
};
myFuncArrow();
----------------
this will point to the window where this function is declared.
================

Question 4:
In your own words what will this point to and why?
    const myFuncArrow = () => {
    console.log(this);
    };
    myFuncArrow();
----------------
this will also point to the window where this function is declared.
================

Question 5:
a. In your own words, what will this point to and why?
b. How can you fix this code?
document.querySelector(".element").addEventListener(() => {
console.log(this);
})
----------------
a. this will point to the window because it has been approached by the arrow function.
b. We may fix it by using a function expression instead of the arrow function.
document.querySelector(".element").addEventListener(function() {
    console.log(this);
})
================

*/
