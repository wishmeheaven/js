/* 
1. Write a function called doubleValues which accepts an
array of integers and returns a new array with all the
values in the array passed to the function doubled.*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log("array",numbers)

function doubleValues(arr){
    let newArr = []
    arr.forEach(function(num){
    newArr.push(num*2)
    })
    return newArr
}
console.log("doubleValues",doubleValues(numbers))

/*
2. Write a function called onlyEvenValues which accepts an
array and returns a new array with only the even values in
the array passed to the function.*/

function onlyEvenValues(arr){
    const newArr = []
    arr.forEach(function(num){
        if(num%2===0)
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

function showFirstAndLast(arr){
    const newArr = []

    arr.forEach(function (num,idx){

        if(idx===0 || idx===arr.length-1)
        newArr.push(num.toString())
    })
    return newArr
}
console.log("showFirstAndLast", showFirstAndLast(numbers))

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
    const vowelsObj = [{"a": 0} ,  {"e": 0} ,  {"i": 0} ,  {"o": 0} ,  {"u": 0}]

       vowelsObj.forEach(function(charAsKey) {
        arrOfchars.forEach(function(char){
               if (char === Object.keys(charAsKey).toString()){
            // approaching the value
                charAsKey[char] += 1
            }   
        })
    })

    // --- CREATING A NEW OBJ with SPRED USE
    // const aSingleObjBySpred = vowelsObj.reduce(function(acc, obj){ 
    //     return {...acc, ...obj} // })
    // return aSingleObjBySpred
    
    // --- CREATING A NEW OBJ with ASSIGN USE
    const aSingleObjByAssign = vowelsObj.reduce(function(acc, obj){
        return Object.assign(acc,obj)})
    return aSingleObjByAssign
}
console.log("number of vowels in string",vowelCount(progRock))


// =========================================

/*
5. Write a function capitalize that takes a string as an
argument and will return the whole string capitalized.
*/
function capitilize(str) {

    let arr = str.toLowerCase().split('')
    let strCodes = []

    arr.forEach(function(char){
        if (char.charCodeAt(char) >= 62 && (char.charCodeAt(char) <=122))
        strCodes.push(char.charCodeAt(char)-32)
        else strCodes.push(char.charCodeAt(char))
})
    console.log(strCodes)

    arr = []
    strCodes.map(function(char){
        arr.push(String.fromCharCode(char))
    })
    str = arr.join('')
    console.log(str)
}

console.log(capitilize("What's the catch"))

/*
6. Write a function called shiftLetters that takes a string as an
argument and return’s an encoded string with each letter
shifted down the alphabet by one.*/
function shiftLetters(str){
    const arr = str.split('')
    const strShifted = []
    // let arr = str.toLowerCase().split('')
    arr.map(function(char){

        strShifted.push(String.fromCharCode(char.charCodeAt(char) - 1))


    })
    console.log(strShifted)
    
    
}
shiftLetters("What's the hack")

/*
7. Create a function called swapCase that takes a string as
an argument and returns a string that every other word is
capitalized. (you can use the fifth’s exercise's function to
keep it dry
*/