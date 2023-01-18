function countOccurrences(str, char) {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === char) {
            counter = counter + 1;
        }
    } return counter;
}
console.log(countOccurrences("ini mini miny moe", "n"))

/*
What is wrong with this code?
1. First, find the line that contains the problem. Write it down.
--- line 5 contains the problem
2. Which debug method did you ue to find the bug?
--- I debugged at 'Chrome' dev tools
3. Explain the bug in your own words.
--- with the breakpoint - I realized that the value of counter
doesn't increase with each occurrence of 'n',
and assign it with itself plus 1 each time the iteration runs into 'n'
(and print it)
4. Fix the code and submit it all.
--- done
function countOccurrences (str, char)
*/