const data = [
    {
        name: "John",
        birthday: "1-1-1995",
        favoriteFoods: {
            meats: ["hamburgers", "sausages"],
            fish: ["salmon", "pike"],
        },
    },
    {
        name: "Mark",
        birthday: "10-5-1980",
        favoriteFoods: {
            meats: ["hamburgers", "steak", "lamb"],
            fish: ["tuna", "salmon", "barracuda"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["ham", "chicken"],
            fish: ["pike"],
        },
    },
    {
        name: "Thomas",
        birthday: "1-10-1990",
        favoriteFoods: {
            meats: ["bird", "rooster"],
            fish: ["salmon"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["hamburgers", "lamb"],
            fish: ["anchovies", "tuna"],
        },
    },
];



/*Create separate functions for each question below:
1. Create a function that returns all the names from the array.*/

function getNames(arr){
    const newArr = []
    arr.forEach(function(el){
        newArr.push(el.name)
    })
    return newArr
}

console.log("getNames",getNames(data))


/*2. Create a function that returns all the objects that are born
before 1990.*/

function getBeforeNinty(arr){
    let newArr = []
    let birthYear = []
    arr.forEach(function(el) {
        birthYear = el.birthday.split("-")
        if (birthYear[2] <= 1990){
            newArr.push(birthYear[2])
        }
    })
    return newArr
}
console.log("getBeforeNinty", getBeforeNinty(data))


/*
3. Create a function that returns an object of all the different
foods from all the objects as the key and the number of
times that food is present in all the objects as the value

Example:
{
hamburgers: 3,
sausages: 1,
salmon: 3,
pike: 2,
steak: 1,
lamb: 2,
tuna: 2,
barracuda: 1,
ham: 1,
chicken: 1,
bird: 1,
rooster: 1,
anchovies: 1

*/


console.log("getFoodCount",getFoodCount(data));

function getFoodCount(arr){

    let foodFish = []
    let foodMeats = []

    let teampArr = []
    let allFoodObj = {}

    for (let food of Object.keys(arr)) {
        foodFish.push(arr[food].favoriteFoods.fish)
        foodMeats.push(arr[food].favoriteFoods.meats)
    }

    foodFish.forEach(function(el){
        el.forEach(function(el){
            teampArr.push(el)
        })
    })
     
    foodMeats.forEach(function(el){
        el.forEach(function(el){
            teampArr.push(el)
        })
    })
     
    teampArr.forEach(function(el){
        if (allFoodObj.hasOwnProperty(el)){
            allFoodObj[el] += 1
        } else {
            allFoodObj[el] = 1
        }
    })

    return allFoodObj  
}