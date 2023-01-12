const book1 = {
    title: "Nineteen Eighty-Four",
    author: "George Orwell",
    yearPublished: 1984,
    latestEdition: 1984,
    language: "English",
    translation: {
        language: [],
        translator: []
    },
    publisher: {
        name: "",
        location: ""
    }
};

const book2 = {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    yearPublished: 1979,
    latestEdition: 1979,
    language: "English",
    translation: {
        language: [],
        translator: []
    },
    publisher: {
        name: "",
        location: ""
    }
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
    setNewLanguage(book, newLanguage) {
        if (newLanguage != book.language) {
            book.language = newLanguage
            return `${book.title} has been published in ${book.language} language`
        } else {
            return `${book.title} has already been published in ${book.language} `
        }
    },
    setTranslation(book, language, translator) {
        if (book.translation.language.includes(language) && book.translation.translator.includes(translator)) {
            return `${book.title} has already been translated to ${language} by ${translator}`
        } else {
            book.translation.translator.push(translator)
            book.translation.language.push(language)
            return `${book.title} has new translation to ${language} by ${translator}`
        }

    },
    setPublisher(book, name, location) {
        book.publisher.name = name
        book.publisher.location = location
        return `${book.title} was originally published by ${book.publisher.name} in ${book.publisher.location}`
    },
    isSamePublisher(book1, book2) {
        return Object.is(book1.publisher.name, book2.publisher.name) ?
            Object.is(book1.publisher.location, book2.publisher.location) ?
            `Both ${book1.title} and ${book2.title} have been published in ${book1.publisher.location} by ${book1.publisher.name}` : `But not at the same country`
        `Both ${book1.title} and ${book2.title} have been published in ${book1.publisher.location} by ${book1.publisher.name}` : `But not at the same country`
    }
}





// + try give both books the same yearPublish
// + try compare between a book to itself
console.log(bookUtils.getFirstPublished(book1, book2))

console.log(bookUtils.setNewEdition(book2, 1979))
console.log(bookUtils.setNewEdition(book1, 2020))
console.log(bookUtils.setNewEdition(book1, 1955))

console.log(bookUtils.setNewLanguage(book2, "English"))
console.log(bookUtils.setNewLanguage(book2, "German"))
console.log(bookUtils.setNewLanguage(book1, "Swedish"))

console.log(bookUtils.setTranslation(book1, "Hungarian","Hristo Stoychkov")) 
console.log(bookUtils.setTranslation(book2, "Italian", "Franchesco Totti")) 
console.log(bookUtils.setTranslation(book2, "Italian", "AlexanderDel Piero")) 
console.log(bookUtils.setTranslation(book2, "Italian", "Franchesco Totti")) 

console.log(bookUtils.setPublisher(book1, "Tor Books", "Canada"))
console.log(bookUtils.setPublisher(book2, "Tor Books", "Canada"))

console.log(bookUtils.isSamePublisher(book1, book2))