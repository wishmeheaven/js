const book1 = {
    title: "Nineteen Eighty-Four",
    author: "George Orwell",
    yearPublished: 2000,
    lastEdition: null

};

const book2 = {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    yearPublished: 1979,
    lastEdition: null
};

const bookUtils = {
    getFirstPublished(someBook, someOtherBook) {
        if (someBook === someOtherBook) {
            return "please compare between 2 different books"
        } else {
            return someBook.yearPublished === someOtherBook.yearPublished ?
                `both ${someBook.title} and ${someOtherBook.title} have been published in the same year ${someBook.yearPublished}` :
                someBook.yearPublished > someOtherBook.yearPublished ?
                    `${someOtherBook.title} published first (at ${someOtherBook.yearPublished})` :
                    `${someBook.title} published first (at ${someBook.yearPublished})`
        }
    }, 
    setNewEdition(book, latestEdition) {
        if (latestEdition >= book.lastEdition) {
            book.lastEdition = latestEdition
            return `${book.title} has been updated to ${latestEdition} edition`
        } else {
            return `${latestEdition} edition is older than ${book.title}'s ${book.lastEdition} `
        }
    }
}


// + try give both books the same yearPublish
// + try compare between a book to itself
console.log(bookUtils.getFirstPublished(book1, book2))

console.log(bookUtils.setNewEdition(book1, 2001))
