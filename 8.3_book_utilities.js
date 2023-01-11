const book1 = {
    title: "Nineteen Eighty-Four",
    author: "George Orwell",
    yearPublished: 1984
}

const book2 = {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    yearPublished: 1979
}

const bookUtils = {

    getFirstPublished : function (someBook, someOtherBook) {
        return someBook.yearPublished === someOtherBook.yearPublished ? [someBook.title, someOtherBook.title] : 
        someBook.yearPublished > someOtherBook.yearPublished ?
        someOtherBook.title : someBook.title
    },
    lastEdition: ({setNewEdition (someBook, editionYear) {
            return editionYear >= someBook.yearPublished ?
                  editionYear : someBook.yearPublished
    }}),
}

// function bookToRead(book) {
//     return `The book ${book.title} was written by ${book.author} in
//      the year ${book.yearPublished}`
// }

// console.log(bookToRead(book))



