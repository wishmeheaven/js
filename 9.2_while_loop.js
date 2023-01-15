function charsCounter(words) {
    let countChars = ""
    let counterArr = []

    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            countChars++
        }
        counterArr.push(countChars)
        countChars = 0
    }

    return counterArr
}

console.log("charsCounter", charsCounter(["1000", "dog", "alibaba", "encyclopedia"]))


function lettersCounter(arr) {
    let i = 0;
    let j = 0;
    let newArr = []

    while(i < arr.length){
        while(j < arr[i].length)
        {
            j++;
        }
        newArr.push(j)
        j = 0
        i++;
    }
    return newArr
}

console.log("lettersCounter", lettersCounter(["1000", "dog", "alibaba", "encyclopedia"]))


// WHAT DO I LIKE BETTER FOR THIS SOLUTION? 
// While (haha) the For-loop is somehow more elegant,
// For (haha) me, the While-loop is so similar in this case -
// That I like them both equally.




