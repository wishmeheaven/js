
const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

function countWords(arr){

    const allWords = arr.join('').toString().toLowerCase()
    let newArr = {}
    for (letter of allWords){
        if(!Object.keys(newArr).includes(letter)){
            newArr[letter] = 1
        } else {
            newArr[letter]++
            console.log("newArr2", newArr[letter])
        }
    }
    console.log("newArr", newArr)
}

countWords(array)