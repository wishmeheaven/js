/* 
1. Write a function called doubleValues which accepts an
array of integers and returns a new array with all the
values in the array passed to the function doubled.*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log("array", numbers)

function doubleValues(arr) {
    let newArr = []
    arr.forEach(function (num) {
        newArr.push(num * 2)
    })
    return newArr
}
console.log("doubleValues", doubleValues(numbers))

/*
2. Write a function called onlyEvenValues which accepts an
array and returns a new array with only the even values in
the array passed to the function.*/

function onlyEvenValues(arr) {
    const newArr = []
    arr.forEach(function (num) {
        if (num % 2 === 0)
            newArr.push(num)
    })
    return newArr
}
console.log("onlyEvenValues", onlyEvenValues(numbers))

/*
3. Write a function called showFirstAndLast which accepts
an array as an argument and returns a new array with only
the first and last elements from the function’s argument
array. The returned array should only contain elements
that are strings.*/

arrObj = [1, { num: 0, str: "cool" }, 3, "lkjd", { num: 1, str: "word" }, "what", "other", "another", 434., 2, "Nd"]

function showFirstAndLast(arr) {
    console.log("showFirstAndLast - original array: \n", arr)
    const newArr = []
    arr.forEach(function (el, idx) {
        if (typeof (el) === 'string') {
            newArr.push(el)
        }
    })
    arr = []
    if (newArr.length > 0) {
        arr.push(newArr[0])
        if (newArr.length > 1) {
            arr.push(newArr[newArr.length - 1])
        }
    }
    return arr
}
console.log("showFirstAndLast - 1st & lst strings", showFirstAndLast(arrObj))

/*
4. Write a function called vowelCount which accepts a string
as an argument. The function should return an object
which has the count of the number of vowels that are in
the string. The key should be the vowel and the value
should be the count. e.g. {a:3, o:2,u:4}. Should not be
case-sensitive. */

const progRock = "The 70s were such an awesome times in the human race history"

function vowelCount(str) {
    const arrOfchars = str.toLowerCase().split('')
    const vowelsObj = [{ "a": 0 }, { "e": 0 }, { "i": 0 }, { "o": 0 }, { "u": 0 }]

    vowelsObj.forEach(function (charAsKey) {
        arrOfchars.forEach(function (char) {
            if (char === Object.keys(charAsKey).toString()) {
                // approaching the value
                charAsKey[char] += 1
            }
        })
    })

    // --- CREATING A NEW OBJ with SPRED USE
    // const aSingleObjWithSpred = vowelsObj.reduce(function(acc, obj){ 
    //     return {...acc, ...obj} // })
    // return aSingleObjWithSpred

    // --- CREATING A NEW OBJ with ASSIGN USE
    const aSingleObjWithAssign = vowelsObj.reduce(function (acc, obj) {
        return Object.assign(acc, obj)
    })
    return aSingleObjWithAssign
}
console.log("number of vowels in string - original string: \n", progRock)
console.log("number of vowels in string - The Great Vawels Count: \n", vowelCount(progRock))


// =========================================

/*
5. Write a function capitalize that takes a string as an
argument and will return the whole string capitalized.
*/
function capitilize(str) {

    let arr = str.toLowerCase().split('')
    let strCodes = []

    arr.forEach(function (char) {
        if (char.charCodeAt(char) >= 62 && (char.charCodeAt(char) <= 122)) {
            strCodes.push(char.charCodeAt(char) - 32)
        } else {
            strCodes.push(char.charCodeAt(char))
        }
    })
    arr = []
    strCodes.forEach(function (char) {
        arr.push(String.fromCharCode(char))
    })
    str = arr.join('')
    return str
}

console.log("Give me an XL - \"What's the catch\": ")
console.log(capitilize("What's the catch"))

/*
6. Write a function called shiftLetters that takes a string as an
argument and return’s an encoded string with each letter
shifted down the alphabet by one.*/
function shiftLetters(str) {
    const arr = str.split('')
    const strShifted = []
    // let arr = str.toLowerCase().split('')
    arr.map(function (char) {

        if (char !== "A" && char !== "a") {
            if (char.charCodeAt(char) >= 62 && (char.charCodeAt(char) <= 122)) {
                strShifted.push(String.fromCharCode(char.charCodeAt(char) - 1))
            } else {
                strShifted.push(char)
            }
        } else {
            if (char === "A") {
                strShifted.push("Z")
            } else strShifted.push("z")
        }
    }
    )

    console.log(strShifted.join(''))


}
console.log("Give me a minus one alphabetic - \"What's the hack\": ")
shiftLetters("What's the hack")

/*
7. Create a function called swapCase that takes a string as
an argument and returns a string that every OTHER word is
capitalized. (you can use the fifth’s exercise's function to
keep it dry
*/
function swapCase(str) {

    let arr = str.toLowerCase().split(' ')
    let splitOdds = []
    let splitEvens = []
    arr.forEach(function (el, idx) {
        if ((idx + 1) % 2 !== 0) {
            splitOdds.push(el)
        } else {
            splitEvens.push(el)
        }
    })

    let temp = ""
    temp = splitEvens.join(' ')
    console.log("temp", temp)
    arr = temp.split('')

    let strCodes = []
    arr.forEach(function (char) {
        if (char.charCodeAt(char) >= 62 && (char.charCodeAt(char) <= 122)) {
            strCodes.push(char.charCodeAt(char) - 32)
        } else {
            strCodes.push(char.charCodeAt(char))
        }
    })
    console.log("strCodes", strCodes)

    arr = []
    strCodes.forEach(function (char) {
        arr.push(String.fromCharCode(char))
    })

    splitEvens = arr.join('')
    temp = splitEvens.split(' ')

    str = ""


    for (let i = 0; i < splitOdds.length; i++) {
        console.log("splitOdds[i]", splitOdds[i])
        if (splitOdds[i] !== undefined)
            str += splitOdds[i]

        if (temp[i] !== undefined) {
            i === splitOdds.length ? str += ` ${temp[i]}` : str += ` ${temp[i]} `
        }
    }
    return str
}

console.log(swapCase("let's try to capitalize every second word."))

