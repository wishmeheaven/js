function findSmallest(a, b, c) {
    if ((a > b) && (b > c)) {
        return a;
    } else if ((a > c) && (a > b)) {
        return b;
    } else {
        return c;
    }
}
console.log(findSmallest(52, 66, 2));

/*
What is wrong with this code?
1. First, find the line that contains the problem. Write it down.
--- line 10 has a misspelling in the function calling
--- after that - the code ran well, but didn't display the expected value.
--- so I've changed the conditions and return value to be accurate and justified the title of the function
(and the task it suppose to do)

//
    2. For the debugging purpose I use visual studio debugging extension of node and breakpoint
--- same one 

3. Explain the bug in your own words.s
4. Fix the code and submit it all.
*/ 