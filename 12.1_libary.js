/* 
Write a JavaScript function that receives the following library
object as an input and displays the books that can be read (the
reading status is true).
Log the book name, author name, and reading status.
*/

const library = [
    {
        author: "Bill Gates",
        title: "The Road Ahead",
        readingStatus: true
    },
    {
        author: "Steve Jobs",
        title: "Walter Isaacson",
        readingStatus: true
    },
    {
        author: "Suzanne Collins",
        title: "Mockingjay: The Final Book of The Hunger Games",
        readingStatus: false
    }
]

function getAvailableBooks(arr){
    let newArr = []
    arr.forEach(function(el){
        if (el.readingStatus){
            newArr.push(el)
        }
    })

    return newArr
}

let availableBooks = getAvailableBooks(library)
let displayBooks = ""
for(let i = 0; i < availableBooks.length; i++) {
    displayBooks += "The book '" + availableBooks[i].title +
    "' which was written by " + availableBooks[i].author + 
    (availableBooks[i].readingStatus ? " is " : " isn't ") + "available for reading.\n" 
}
console.log(displayBooks)
