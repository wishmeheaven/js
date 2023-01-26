const data = [
  {
    id: 1,
    name: "John Doe",
    age: 30,
    address: {
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zip: 10001
    },
    hobbies: ["reading", "running", "gaming"],
    friends: [
      {
        id: 2,
        name: "Jane Smith",
        age: 25
      },
      {
        id: 3,
        name: "Bob Johnson",
        age: 35
      }
    ]
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 25,
    address: {
      street: "456 Park Ave",
      city: "Los Angeles",
      state: "CA",
      zip: 90001
    },
    hobbies: ["hiking", "cooking", "traveling"],
    friends: [
      {
        id: 1,
        name: "John Doe",
        age: 30
      },
      {
        id: 4,
        name: "Samantha Brown",
        age: 28
      }
    ]
  },
  {
    id: 3,
    name: "Bob Johnson",
    age: 35,
    address: {
      street: "789 Elm St",
      city: "Chicago",
      state: "IL",
      zip: 60001
    },
    hobbies: ["fishing", "golfing", "watching TV"],
    friends: [
      {
        id: 1,
        name: "John Doe",
        age: 30
      },
      {
        id: 5,
        name: "Emily Davis",
        age: 32
      }
    ]
  }
];

// FILTER
// Exercise 1: Use the filter method to get all the friends of John Doe
const johnD = data.filter(function (person) {
  return person.name === "John Doe"
})
const johnFriends = johnD[0].friends
// console.log("John's friends ",johnFriends)

// Exercise 2: Use the filter method to get all the people who live in New York
const nyPeople = data.filter(function (person) {
  return person.address.state === "NY"
})
// console.log("NY People ", nyPeople)

// Exercise 3: Use the filter method to get all the people who are older than 30
const olderThan30 = data.filter(function (person) {
  return person.age > 30
})
// console.log("Older than 30 ", olderThan30)

// MAP
// Exercise 1: Use the map method to put the names of all the friends of John Doe in a single array (use also the flat method)
const johnFriendsNames = johnFriends.map(function (friend) {
  return friend.name
})
// console.log("John's friends names ", johnFriendsNames)

// Exercise 2: Use the map method to get the full addresses (street, city, state, and zip) of all the people in the data array
const fullAddresses = data.map(function (person) {
  return `${person.name}'s address: ${person.address.street}, ${person.address.city}, ${person.address.state},${person.address.zip}`
})
// console.log("Full Addresses ", fullAddresses)

// Exercise 3: Use the map method to get the hobbies of all the people in the data array in a single array
const allHobbies = data.map(function (person) {
  return `${person.name}'s hobbies: ${person.hobbies}`
})
// console.log("All Hobbies ", allHobbies)

// FIND
// Exercise 1: Use the find method to find the first person who lives in Chicago
const firstChicago = data.find(function (person) {
  return person.address.city === "Chicago"
})
// console.log('First Chicago Person is ${firstChicago.name}`)

// Exercise 2: Use the find method to find the first person who is older than 30
const firstOlderThan30 = data.find(function (person) {
  return person.age > 30
})
// console.log(`First person who's older than 30 is ${firstOlderThan30.name} (${firstOlderThan30.age})`)

// Exercise 3: Use the find method to find the first person who has "reading" as a hobby
const firstReadingHobby = data.find(function (person) {
  return person.hobbies.includes("reading")
})
// console.log(`First reading as a hobby person is: ${firstReadingHobby.name}`)

// FOREACH
// Exercise 1: Use the forEach method to print out the names of all the people in the data array
// data.forEach((person) => {
//     console.log(person.name)
// })

// Exercise 2: Use the forEach method to add a new property "isAdult" to each person object and set it to true if the person is over 18 and false if not
data.forEach((person) => {
  return {
    ...person,
    isAdult: person.age >= 18 ? person.isAdult = true : person.isAdult = false
  }
})
// console.log(data)


// Exercise 3: Use the forEach method to print out the names of all the friends of each person
// data.forEach((person) => {
//   console.log(`${person.name}'s friends are`)
//     person.friends.forEach((el, idx) => {
//       console.log(el.name)
//           return el.name
//     })
// })

// SOME
// Exercise 1: Use the some method to check if any of the people in the data array have "cooking" as a hobby
// const isAnyoneLikesCooking = data.some((person) => {
//   console.log(person.hobbies.includes("cooking") ? `${person.name} likes to cook` : "")
//   return person.hobbies.includes("cooking")
// })
// console.log(isAnyoneLikesCooking ? "At least one person likes to cook" : "No one likes to cook")

// Exercise 2: Use the some method to check if any of the people in the data array live in California
// const isAnyoneFromCA = data.some((person) => {
//   console.log(person.address.state === "CA" ? `${person.name} is from CA` : "")
//   return person.address.state === "CA"
// })
// console.log(isAnyoneFromCA ? "At least one person is from CA" : "No one is from CA")


// Exercise 3: Use the some method to check if any of the friends of each person in the data array are older than 30
data.forEach((person) => {
  let counter = 0
  let newArr = []
  person.friends.some((el) => {
    if(el.age > 30) counter++;
    newArr.push(el.name)
    return el.age > 30
  })
  if(counter > 0) {
    console.log(`${person.name}'s friends (${newArr}) are older than 30`)
  }
})


// EVERY

// Exercise 1: Use the every method to check if all the people in the data array have "reading" as a hobby
const isEveryoneLikesReading = data.every((person) => {
  console.log(person.hobbies.includes("reading") ? `${person.name} likes to read` : "")
  return person.hobbies.includes("reading")
})
// console.log(isEveryoneLikesReading ? "Everyone likes to read" : "Not everyone likes to read")


// Exercise 2: Use the every method to check if all the people in the data array live in the same state
// const isEveryoneFromSameState = data.every((person) => {
//   console.log(person.address.state === "CA" ?
//    `${person.name} is from CA` : "")
//   return person.address.state === "CA"
// })
// console.log(isEveryoneFromSameState ? "Everyone is from the same state" : "Not everyone is from the same state")


// Exercise 3: Use the every method to check if all the friends of each person in the data array are older than 25
let isAllFriendsOlder25 = null

data.forEach((person) => {
  let counter = 0
  let newArr = []
  isAllFriendsOlder25 = person.friends.every((el) => {
    if(el.age > 25) counter++;
    newArr.push(el.name)
    return el.age > 25
  })
  if(counter > 0) {
    console.log(`${person.name}'s friends (${newArr}) are older than 25`)
  }
})
console.log(isAllFriendsOlder25 ? "All friends are older than 25" : "Not all friends are older than 25")


// REDUCE

// Exercise 1: Use the reduce method to get the total age of all the people in the data array

// Exercise 2: Use the reduce method to get the number of people who live in each state

// Exercise 3: Use the reduce method to get the average age of all the people in the data array


// INCLUDES

// Exercise 1: Use the includes method to check if the hobbies of John Doe include "gaming"

// Exercise 2: Use the includes method to check if the friends of Jane Smith include someone with the id of 4

// Exercise 3: Use the includes method to check if the data array includes a person with the name "Emily Davis"
