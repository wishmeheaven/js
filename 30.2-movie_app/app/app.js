'use strict'
/*
Let's create a small movie app.
We will be using the OMDB API.
We need to register for an API key here.
You will get an email with your unique API key.
Read the documentation on what you can do with this API.
To have some influence look here
We want a user to type a movie name at the input and get
the data displayed on the screen:
1. Movie poster
2. Movie title
3. Genre
4. Year
5. Plot
6. Director
7. Actors
8. Ratings of movies from IMDB, rotten tomatoes, and
Metacritic. (make sure that particular movie gives you all
the ratings. It could be, that movie won’t give you all 3
ratings
*/

document.getElementById('btn').addEventListener('click',showMovieInfo)

const userInput = document.getElementById('user-input')


// window.onload = function () {
//     userInput.focus();
// }

userInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        showMovieInfo()
    }
})

async function showMovieInfo() {
    const url = `http://www.omdbapi.com/?apikey=584740cb&t=${userInput.value}`
    // const url = "http://www.omdbapi.com/?apikey=584740cb"
    try {
    const response = await fetch(url)
    const movieCard = document.getElementById('result')
        if (movieCard.value === undefined) {
            console.log(movieCard.value===undefined)
            const randomEmoji = Math.floor(Math.random()*26)
            movieCard.innerHTML = `
            <h3>
                Movie not found <span>
                <img id="smily" src="../assets/img/smily${randomEmoji}.jpg"/>
                </span>
            </h3>
            `
    } else {
            const data = await response.json()
        console.log(data)
        //// style="width:12rem; height:12rem; cursor: pointer;"
        userInput.value = ''
        movieCard.innerHTML = `
                <img id="movieImg" src="${data.Poster}"/> </br>                
                <p id="movie-title">${data.Title ? data.Title : ""} (${data.Year})</p>
                <p id="movie-genre">${data.Genre ? data.Genre : ""}</p>
                <p id="movie-plot">${data.Plot ? data.Plot : ""}</p>
                <p id="movie-director">${data.Director ? data.Director : ""}</p>
                <p id="movie-actors">${data.Actors ? data.Actors : ""}</p>
                <p id="movie-rating">Rating : ${data.imdbRating ? data.imdbRating : ""}</p>
                `
        movieCard.querySelector('img').addEventListener('click', function () {
            window.open(`https://www.imdb.com/title/${data.imdbID}`, '_blank')
        })
    }   
    } catch(err) {
        console.log("he2", response)
        movieCard.innerHTML = `<p>Movie not found :(</p>`
        console.log(err)
    }
}

