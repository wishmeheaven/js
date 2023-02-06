'use strict'
/*
Write a function that takes a number as an argument and
returns a Promise that tests if the value is less than or greater
than the value 10.
If it is greater than 10 it is resolved, if it is less than 10 it is
rejected.
Call the function and print the resolve and reject in a .then,
.catch
*/

function isGreaterThan(number) { 
    return new Promise((resolve, reject) => {
        if (number > 10) { 
            resolve(number)
        } else {
            reject(number)
        }
})}

isGreaterThan(12).then((number) => {
    console.log(`${number} is greater than 10`)
}).catch((number) => {
    console.log(`${number} is less than 10`)
})

isGreaterThan(9).then((number) => {
    console.log(`${number} is greater than 10`)
}).catch((number) => {
    console.log(`${number} is less than 10`)
})




