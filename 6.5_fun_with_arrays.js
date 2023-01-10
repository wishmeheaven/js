
// 1. filling an array with 100 identical objects
let person = { firstName: "Chuck", lastName: "Norris"};
let arrOfObj = []
arrOfObj.length = 100
arrOfObj.fill(person)
console.log("\narray of 100 objects :",arrOfObj)

// 2. array from 1-100  (*tough one!)
let arrOfNumbers = Array.from(Array(10).keys()).map(arr => arr + 1)
console.log("\narray from 1-100 :",arrOfNumbers)

// 3. object-valuesOnly' array
let legend = {name: "Chuck", lastName: "Norris", profession: ["actor", "myth", "warrior", "full beard presenter","sherif"] };
let legendValues = Array.from(Object.values(legend))
console.log("\nonly values of obj convert to array :",legendValues)

// challenging myself with sub(??)-values
let legendProfessionValues = Array.from(Object.values(legend.profession))
console.log("as well as this obj sub-values (/profession) :", legendProfessionValues)

// 4. convert an array into an object
let professionValuesObject = {...legendProfessionValues}
console.log("\nconvert an array to an object :", professionValuesObject)

// 5. Array is an object. apparently. or should I say: obviously(..?)


// 6.a) copy of an array that won't affect the original array
let anObject = ["one", "two", "three"]
let aDifferentObject = Object.assign({},anObject)
console.log("\nObject : ",anObject)
console.log("Clone Object : ", aDifferentObject)
console.log("objects ID test : ", anObject === aDifferentObject)
anObject[1] = "cool"
console.log("changing one won't affect each other :")
console.log("Object : ", anObject)
console.log("Clone Object: ", aDifferentObject)

// 6.b) copy of an array that won't affect the original array
let anotherObject = ["4", "5", "6"]
let anotherDifferentObject = Object.assign(anotherObject)
console.log("\nAnother Object: ", anotherObject)
console.log("Merged Object: ", anotherDifferentObject)
console.log("objects ID test: ",anotherObject === anotherDifferentObject)
console.log("changing one will affect the other :")
anotherObject[1] = "seven"
anotherDifferentObject[2] = "Boom!"
console.log("Object :", anotherObject)
console.log("Merged Object :", anotherDifferentObject)

