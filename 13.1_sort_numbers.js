/*Use the array of numbers below and answer the following
questions:
const numbers = [1, -5, 666, 2, 400, 11];
1. Sort the array of numbers from descending to ascending
order.
2. Sort the array of numbers from ascending to descending
order*/

const numbers = [1, -5, 666, 2, 400, 11];
const descSort = numbers.slice().sort((a, b) => b - a);
console.log(descSort);
const acsSort = numbers.slice().sort((a, b) => a - b);
console.log(acsSort);




