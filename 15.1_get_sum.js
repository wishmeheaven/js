function getSum(arr1, arr2) {
    let sum = 0;
    for (let i = 0; i < arr1.length; i++) {
        sum += arr1[i];
    }
    for (let i = 0; i < arr2.length; i++) {
        sum += arr2[i];
    }
    return sum
}
console.log(getSum([1, 2, 3],[5, 66, 23]))

/* 
    1. The first problem in the debugging process was displayed in line 3
 and indicate that arr1 is undefined

    2. For the debugging purpose I use visual studio debugging extension of node

    3. continue of the debugging process (after question 1)
     - once I put "," between the 2 arrays that I send to the function
     so it will  actually gets 2 arguments as it expects to
    - I changed the sum variable from 'const' to 'let' so it will be assignable
    - and lastly I add return it from the function, and put the call expression inside a console.log

 */
