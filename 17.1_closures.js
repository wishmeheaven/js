/* 
Block 1
var b = 1;
function someFunction(number) {
function otherFunction(input) {
return b;
}
b = 5;
return otherFunction;
}
var firstResult = someFunction(9);
var result = firstResult(2);
--------------------------
--- firstResult = someFunction(9) will return 1
because in the first run it will access otherFunction's value before it store it with 5 (/assign 5 to it)
--- var result = firstResult(2);
will return 5 and every other tine this function will run it will return 5
==========================
Block 2
var a = 1;
function b2() {
a = 10;
return;
function a() { }
}
b2();
console.log(a);
--------------------------
--- b2() will return nothing, but it will make the value of a to change to 10
--- console.log(a) will print 10
==========================
Block 3
let i;
for (i = 0; i < 3; i++) {
const log = () => {
console.log(i);
}
setTimeout(log, 100);
--------------------------
I think it will return an error message because when i declared it doesn't receive any value.
but if it won't - 
setTimeOut(log, 100) will run 3 times,
but if not - 
it will iterate 3 times and will print 0,1,2
==========================

*/