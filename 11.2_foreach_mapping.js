/* 
1. Write a function called doubleValues which accepts an
array of integers and returns a new array with all the
values in the array passed to the function doubled.*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log("array: ",numbers)

function doubleValues(arr){
    let newArr = []
    arr.forEach(function(num){
    newArr.push(num*2)
    })
    return newArr
}
console.log("doubleValues: ",doubleValues(numbers))

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
console.log("onlyEvenValues: ", onlyEvenValues(numbers))

/*
3. Write a function called showFirstAndLast which accepts
an array as an argument and returns a new array with only
the first and last elements from the function’s argument
array. The returned array should only contain elements
that are strings.*/

function showFirstAndLast(arr){
    

}





/*
4. Write a function called vowelCount which accepts a string
as an argument. The function should return an object
which has the count of the number of vowels that are in
the string. The key should be the vowel and the value
should be the count. e.g. {a:3, o:2,u:4}. Should not be
case-sensitive.
5. Write a function capitalize that takes a string as an
argument and will return the whole string capitalized.
6. Write a function called shiftLetters that takes a string as an
argument and return’s an encoded string with each letter
shifted down the alphabet by one.
7. Create a function called swapCase that takes a string as
an argument and returns a string that every other word is
capitalized. (you can use the fifth’s exercise's function to
keep it dry




*/