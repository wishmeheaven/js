/*
The following exercise contains the following subjects:
● bind, call, apply
We want to print the all heroes names. 
Implement the printHeroes function:
Note: you cannot change the super heroes objects
*/

const wonderWoman = {
    name: "Diana Prince"
}
const batman = {
    name: "Bruce Wayne"
}
const superHeroes = [wonderWoman, batman];

function printName() {
    console.log(`my name is ${this.name}`);
}

function printHeroes(heroes, printFunc) {
    heroes.forEach(function (hero) {
        printFunc.call(hero)
        printFunc.apply(hero)
        const printFuncBinding = printFunc.bind(hero)
        printFuncBinding()
    
    })
}

printHeroes(superHeroes, printName)


