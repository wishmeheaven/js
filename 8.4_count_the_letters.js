 const words = ["Hello", "Good Day" , "Your Welcome", "hotdog", "hamburgers"];
 
 function countLetters(words) {

    let letters = words.join("").toLowerCase().split("")
    console.log(letters)
    let lettersCount = {}

    letters.forEach(letter => {
        if (lettersCount[letter]) {
            lettersCount[letter]++
            console.log(" lettersCount[letter]++" ,lettersCount[letter])
        } else {
            lettersCount[letter] = 1
            console.log(" lettersCount[letter]" ,lettersCount[letter])

        }
    
    })
    
    return lettersCount

 }

 console.log(countLetters(words))