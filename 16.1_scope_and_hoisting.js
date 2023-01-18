/*
Block 1 
function funcA() {
console.log(a);
console.log(foo());
var a = 1;
function foo() {
return 2;
}
----------
- funcA()
will approach funcA because it already been declare
- console.log(a)
will return undefined because "a" it's not declare yet
0- console.log(foo())
will return 2 because zoo() was already initialized in the first run of the code
====================
Block 2
var fullName = 'John Doe';
var obj = {
fullName: 'Colin Ihrig',
prop: {
fullName: 'Aurelio De Rosa',
getFullName: function () {
return this.fullName;
}
}
};
console.log(obj.prop.getFullName());
var test = obj.prop.getFullName;
console.log(test());
--------
console.log(obj.prop.getFullName))
will return the 'Arelio De Rose' (why isn't it my name?!)
0 because - a. it already declared, b. it is the closest scope
for the location we're approaching to in our request

console.log(test())
at first I thought that it will only return the function content
without the return value itself (full name)
like: "fn(){return this.fullName}"
but no I think that because this variable already
has been called 3 lines of code ago -
it will return 'Aurelio De Rose'
====================
Block 3 
function funcB() {
let a = b = 0;
a++;
return a;
}
funcB();
console.log(typeof a);
console.log(typeof b)
---------
funcB()
will call an existing function which will return the value 1
without being printing.
console.log(typeof a) will return that a undefined because it is not
called on the same scope.
so as console.log(typeof b).
====================
Block 4
function funcC() {
console.log("1");
}
funcC();
--- will print 1

function funcC() {
console.log("2");
}
funcC();
--- will print 2
==================
Block 5
function funcD1() {
d = 1;
}
funcD1();
console.log(d);
function funcD2() {
var e = 1;
}
funcD2();
console.log(e);
---------
--- console.log(d) will return that d is undefined 
(not sure)
--- console.log(e) will return that d is undefined 
because "e" is declared in a different scope and there isn't an access to it's value from the global scope


=======================
Block 6
function funcE() {
console.log("Value of f in local scope: ", f);
}
console.log("Value of f in global scope: ", f);
var f = 1;
funcE();
----------

*/