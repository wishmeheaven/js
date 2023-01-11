const book1 = {
    title: "Nineteen Eighty-Four",
    author: "George Orwell",
    yearPublished: 1984,
    latestEdition: 1984,
    language: "English"
};

const book2 = {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    yearPublished: 1979,
    latestEdition: 1979,
    language: "English"
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
        if (latestEdition > book.language) {
            book.language = latestEdition
            return `${book.title} has been updated to ${book.latestEdition} edition`
        } else {
            return `${latestEdition} edition isn't newer than ${book.title}'s ${book.latestEdition} `
        }
    }
    ,
    setNewLanguage(book, newLang) {
        if (newLang != book.language) {
            book.language = newLang
            return `${book.title} has been translated to ${book.language} language`
        } else {
            return `${book.title} has already been published in ${book.language} `
        }
    }
}





// + try give both books the same yearPublish
// + try compare between a book to itself
console.log(bookUtils.getFirstPublished(book1, book2))

// console.log(bookUtils.setNewEdition(book2, 1979))
// console.log(bookUtils.setNewEdition(book1, 2020))
// console.log(bookUtils.setNewEdition(book1, 1955))

console.log(bookUtils.setNewLanguage(book2, "English"))
console.log(bookUtils.setNewLanguage(book2, "German"))
console.log(bookUtils.setNewLanguage(book1, "Swedish"))
