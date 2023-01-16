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
let displayBooks = "The available books in the library currently are: "
for(let i = 0; i < availableBooks.length; i++){
    displayBooks += `${availableBooks[i].title},${availableBooks[i].author}, ${availableBooks[i].readingStatus}'
}
console.log(displayBooks)
