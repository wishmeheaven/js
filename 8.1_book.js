const book = {
    title : "Ender's Game",
    author: "Orson Scott Card",
    yearPublished : 1985,  
    genre: "Science fiction"
}

function bookToRead(book) {
    return `The book ${book.title} was written by ${book.author} in
    the year ${book.yearPublished}`
}

console.log(bookToRead(book))



