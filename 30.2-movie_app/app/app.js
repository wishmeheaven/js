'use strict'

document.getElementById('btn').addEventListener('click', showMovieInfo)

const userInput = document.getElementById('user-input')

window.onload = function () {
    userInput.focus()
}

userInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        showMovieInfo()
    }
})

async function showMovieInfo() {
    const url = `http://www.omdbapi.com/?apikey=584740cb&t=${userInput.value}`
    try {
        const response = await fetch(url)
        const movieCard = document.getElementById('result')
        const data = await response.json()
        if (data.Response === "False") {
            const randomEmoji = Math.ceil(Math.random() * 17)
            movieCard.innerHTML = `
            <div class="alert" role="alert">
            <h3>
             ${randomEmoji === 12 ?
                    "Find it or I'll shoot.." :
                    randomEmoji === 15 ?
                        "Mm-mm! Mm! Mmm!!" :
                        "Movie not found"}</h3>
                <img id="smily" src="./assets/img/smily${randomEmoji}.jpg" style="width: ${randomEmoji === 12 ? 6 : 5}rem; height:${randomEmoji === 12 ? 6 : 5}rems;"/>
            </div>
            `
        } else {
            console.log(data)
            console.log(data.Ratings[0].Value)
            console.log(data.Ratings[1].Value)
            console.log(data.Ratings[2].Value)
            console.log(data.Rated)
            userInput.value = ''
            movieCard.innerHTML = `
                <img id="movieImg" src="${data.Poster}"/>             
                <p id="movie-title">${data.Title} (${data.Year}) <span id="movie-runtime"> ${data.Runtime}</p>
                <p id="movie-rated" style=${data.Rated === "R" ? "color:red" : "color:white"}>Rated ${data.Rated}</p>    
                </p>
           <p id="movie-genre"><span>Genre</span></br> ${data.Genre}</p>
                <p id="movie-plot"><span>Plot</span></br>${data.Plot}</p>
                <p id="movie-director"><span>Director</span></br>${data.Director}</p>
                <p id="movie-actors"><span>Cast</span></br>${data.Actors}</p>
                <p id="movie-rating"><span>IMDB Rating</span> ${data.Ratings[0].Value}</p>
                <p id="movie-metascore"><span>Metascore</span> ${data.Ratings[2].Value}</p>
                <p id="movie-rotten"><span>Rotten Tomatoes</span> ${data.Ratings[1].Value}</p>
                <p id="movie-language"><span>Language</span></br>${data.Language}</p>
                <p id="movie-country"><span>Country</span></br>${data.Country}</p>

                `
            movieCard.querySelector('img').addEventListener('click', function () {
                window.open(`https://www.imdb.com/title/${data.imdbID}`, '_blank')
            })
        }
    } catch (err) {
        console.log(err)
    }
}
