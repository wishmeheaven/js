
const string = "The more you know, the more you know that you don't know";

let lastOccurrence = "you"


let stringTemp = string
let stringTemp2 = ""
let stringTemp3 = ""

// while (stringTemp.indexOf(lastOccurrence != -1)) {

for (let i = 0; i < string.length; i++) {

    if (stringTemp.indexOf(lastOccurrence) != -1) {
        console.log("stringTemp.length: " + stringTemp.length)
        stringTemp2 = stringTemp.slice(stringTemp.indexOf(lastOccurrence)
            + lastOccurrence.length, stringTemp.length)
        console.log("stringTemp2.length: " + stringTemp2.length)
        stringTemp3 += stringTemp.slice(0, stringTemp.indexOf(lastOccurrence) + lastOccurrence.length)
        console.log("stringTemp3.length: " + stringTemp3.length)
        console.log("stringTemp", stringTemp)
        console.log("stringTemp2", stringTemp2)
        console.log("stringTemp3", stringTemp3)
        stringTemp = stringTemp2
        position = stringTemp3.length - lastOccurrence.length
    }
    else {
        break;
    }
}

console.log(`the last occurrence of the word "${lastOccurrence}" is at index ${position}`)