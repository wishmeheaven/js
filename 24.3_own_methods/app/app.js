/*
Instructions
1. Build your own filter method with the help of prototypes
2. Build your own find method with the help of prototypes
Extra
3. Build your own reduce method with the help of prototypes
*/

function Fruit(name, color, taste, season) {
    this.name = name
    this.color = color
    this.taste = [taste]
    this.season = season
}

const strawberry = new Fruit('strawberry', 'red', ['sweet'], 'spring')
const grapefruit = new Fruit('grapefruit', 'greenish-yellow', ['bitter', 'sweet'], 'winter')
const lemon = new Fruit('watermelon', 'green-red', ['sour'], 'summer')
const pomegranate = new Fruit('pomegranate', 'red', ['sweet'], 'fall')
const banana = new Fruit('banana', 'yellow', ['sweet'], 'summer')

const fruits = [strawberry, grapefruit, lemon, pomegranate, banana]

Fruit.prototype.myFilter = function (filterBy) {
    console.log(`In my filter, filtering ${filterBy}`)
    return fruits.filter((el) => {
        return el.color.includes(filterBy)
    })
}

console.log(Fruit.prototype.myFilter('green'))

Fruit.prototype.myFind = function (findBy) {
    console.log(`In my find, looking for the first ${findBy} fruit`)
    return fruits.find((el) => {
        return el.color.includes(findBy)
    })
}

console.log(Fruit.prototype.myFind('red'))

Fruit.prototype.myReduce = function (acc, total) {
    console.log('In my reduce,')
    let reduceLetters = fruits.reduce((acc, el) => {
        console.log(`${el.name}'s ${el.name.length} letters summing up into ${acc + el.name.length}`)
        return acc + el.name.length
    }, 0)
    return reduceLetters
}

Fruit.prototype.myReduce(fruits)



