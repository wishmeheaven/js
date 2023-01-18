function calcAverage(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i]
    } return sum/arr.length;
}

console.log (calcAverage([85, 90, 92]))

/*
What is wrong with this code ?
1. First find the line that contains the problem.Write it down.
--- line 3 : the variable "sum" doesn't get an initialized value while being use later in the cade
as if it as a value (in assignment expression)
2. Which debug method did you use to find the bug ?
--- I use visual studio code
3. Explain the bug in your own words.
--- after sum was valueless - I gave it a 0, 
and after the for loop I divided the array length from it (sum)
and print the result where I called the function.
4. Fix the code and submit it all.
--- done.
*/