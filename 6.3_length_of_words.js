function charsCounter(words){
    let countChars = ""
    let counterArr = []

        for (let i = 0 ; i < words.length ; i++)
        {
            for (let j = 0 ; j < words[i].length ; j++)        
            {
                countChars++
            }

            counterArr.push(countChars)
            countChars = 0
        }

    return counterArr
}

console.log("charsCounter", charsCounter(["1000", "dog", "alibaba","encyclopedia"]))

