const people = ["Greg", "Mary", "Devon", "James"];


// 1
for (let i = 0 ; i < people.length ; i++){
    console.log(people[i])
}

// 2. remove Greg
people.shift()
console.log(people)

// 3. remove James
people.pop()
console.log(people)

// 4. adding Matt
people.unshift("Matt")
console.log(people)

// 5. adding myself
people.push("Ran")
console.log(people)

// 6. iterating stop after Mary
for (let i = 0; i < people.length; i++) {

    console.log(people[i])
    if (people[i] === "Mary")
    break;
}

// 7. a mini-copy (without Mary and Matt)
let fewerPeople = people.slice(2,people.length)
console.log(fewerPeople)

// 8. indexOf Mary
console.log(people.indexOf("Mary"))

// 9. indexOf Foo
console.log(people.indexOf("Foo"))

// 10.a) redefine people to original group
console.log("current state of 'people'",people)

people.pop(); //Removing Ran from the end of the array
people.push("James"); //Adding James to the end of the array
people.shift(); //Removing Matt from the start of the array
people.unshift("Greg"); //Adding greg to the start of the array

console.log("back to original state of 'people'", people)

// 10.b) using splice to remove Devon and add Elizabeth and Artie
people.splice(2,1,"Elizabeth", "Artie")
console.log("Devon out, Elizabeth and Artie in", people)

// 11. adding Bob by concatenating
let withBob = people.concat("Bob")

console.log("welcome to the people, Bobby", withBob)


