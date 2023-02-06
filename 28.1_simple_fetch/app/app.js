'use strict'
/*
Let's do a simple ajax call with fetch using this URL
“https://api.jokes.one/jod”.
Create a button that will fetch the joke of the day.
Display to the screen the joke title and the joke itself
*/
// append the joke between the buttons


const jokeTitle = document.querySelector('.joke-title')
const jokeText = document.querySelector('.joke-text')
// const jokeBtn = document.querySelector('.joke-btn')
const jokeBtn = document.createElement('button')
jokeBtn.textContent = 'Click & Laugh'

document.body.appendChild(jokeBtn)

jokeBtn.addEventListener('click', () => {
    fetch('https://api.jokes.one/jod')
        .then((response) => response.json())
        .then((data) => {
            // console.log(data.contents.jokes[0].joke.title)
            // console.log(data.contents.jokes[0].joke.text)
            const jokeTitleText = document.createTextNode(data.contents.jokes[0].joke.title)
            const jokeTextText = document.createTextNode(data.contents.jokes[0].joke.text)
            jokeTitle.appendChild(jokeTitleText)
            jokeText.appendChild(jokeTextText)

        })
        .catch((error) => console.log(error))
})




