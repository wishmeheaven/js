
function getSumOfEven(arr) {
    console.log(arr[1] + arr[3] + arr[5] + arr[7] + arr[9])
}

getSumOfEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


/*
What is wrong with this code ?
1. First, find the line that contains the problem.Write it down.
--- line 3 return a NaN

2. Which debug method did you use to find the bug ?
--- I used chrome devtool and breakpoints and print the values separately 
"to track down" (obviously, it was clear all along) the variable which
is not an available Number

3. Explain the bug in your own words.
--- arr[10] is trying to call the un-existing tenth index in an array which 9 is its last index

4. Fix the code and submit it all.
we want to sum all numbers in even cells in arrays of size 10:
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10] => 2 + 4 + 6 + 8 + 10 = 30
--- done

*/
