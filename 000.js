
const string = "The more you know, the more you know that you don't know";

let lastOccurrence = "you"
console.log(lastOccurrence)

let position = 0

let stringTemp = string
let stringTemp2 = ""
let stringTemp3 = ""

let oops = 0


stringTemp2 = stringTemp.slice(stringTemp.indexOf(lastOccurrence) + lastOccurrence.length, stringTemp.length)
stringTemp3 += stringTemp.slice(0, stringTemp.indexOf(lastOccurrence) + lastOccurrence.length)
oops = stringTemp2.length
console.log("stringTemp", stringTemp)
console.log("stringTemp2", stringTemp2)
console.log("stringTemp3", stringTemp3)
console.log("oops", oops)
stringTemp = stringTemp2

console.log("___", stringTemp2.includes(lastOccurrence))
console.log("===", stringTemp2.indexOf(lastOccurrence))

stringTemp2 = stringTemp.slice(stringTemp.indexOf(lastOccurrence) + lastOccurrence.length, stringTemp.length)
stringTemp3 += stringTemp.slice(0, stringTemp.indexOf(lastOccurrence) + lastOccurrence.length)
oops = stringTemp2.length
console.log("stringTemp", stringTemp)
console.log("stringTemp2", stringTemp2)
console.log("stringTemp3", stringTemp3)
console.log("oops", oops)
stringTemp = stringTemp2

console.log("___", stringTemp2.includes(lastOccurrence))
console.log("===", stringTemp2.indexOf(lastOccurrence))
stringTemp2 = stringTemp.slice(stringTemp.indexOf(lastOccurrence) + lastOccurrence.length, stringTemp.length)
stringTemp3 += stringTemp.slice(0, stringTemp.indexOf(lastOccurrence) + lastOccurrence.length)
oops = stringTemp2.length
console.log("stringTemp", stringTemp)
console.log("stringTemp2", stringTemp2)
console.log("stringTemp3", stringTemp3)
console.log("oops", oops)
stringTemp = stringTemp2
console.log(stringTemp3.length - lastOccurrence.length)

console.log("___", stringTemp2.includes(lastOccurrence))
console.log("===", stringTemp2.indexOf(lastOccurrence))
oops = stringTemp2.length
console.log("stringTemp", stringTemp)
console.log("stringTemp2", stringTemp2)
console.log("stringTemp3", stringTemp3)
console.log("oops", oops)
stringTemp = stringTemp2
console.log(stringTemp3.length - lastOccurrence.length)
