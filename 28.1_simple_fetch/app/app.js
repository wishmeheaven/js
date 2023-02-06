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
const jokeBtn = document.createElement('button')
jokeBtn.textContent = 'Click & Laugh'

document.body.appendChild(jokeBtn)

jokeBtn.addEventListener('click', () => {
    jokeTitle.innerText = '';
    jokeText.innerText = '';
    fetch('https://api.jokes.one/jod')
        .then((response) => response.json())
        .then((data) => {
            jokeTitle.textContent = data.contents.jokes[0].joke.title;
            jokeText.textContent = data.contents.jokes[0].joke.text;
        })
        .catch((error) => console.log(error))
})




