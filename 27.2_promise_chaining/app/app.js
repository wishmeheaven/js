'use strict'
/*
Write two functions that use Promises that you can chain.
The first function, makeAllCaps(), will take in an array of words
and capitalize them, and then the second function, sortWords(),
will sort the words in alphabetical order. If the array contains
anything but strings, it should throw an error.
Call the functions once with an array of words and call it once
with an array that includes at least one item that is not a word.
Print the resolve and reject in a .then, .catch
*/

function makeAllCaps(wordsArr) {
    return new Promise((resolve, reject) => {
        let wordsToUpper = wordsArr.map((word) => {
            if (typeof(word) === 'string') {
                return word.toUpperCase()
            } else {
                reject('Error: not all Items are strings!')
            }
        })
        resolve(wordsToUpper)
    })
}

function sortWords(wordsArr) {
    return new Promise((resolve, reject) => {
        if (wordsArr) {
            resolve(wordsArr.sort())
        } else {
            reject('Error: Something went wrong with sorting words.')
        }
    })
}

const allStringsArr = ['Tammi', 'Pesek Zman', 'Kinder Bueno']
const notAllStringsArr = ['Avocado', 'Apple', 704]

makeAllCaps(allStringsArr)
    .then(sortWords)
    .then((result) => console.log(result))
    .catch((error) => console.log(error))

makeAllCaps(notAllStringsArr)
    .then(sortWords)
    .then((result) => console.log(result))
    .catch((error) => console.log(error))
