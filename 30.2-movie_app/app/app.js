'use strict'

document.getElementById('btn').addEventListener('click', showMovieInfo)


const userInput = document.getElementById('user-input')

const card = document.querySelector('.card')

const movieCard = document.getElementById('result')

const refreshBtn = document.getElementById("refresh-btn");


window.onload = function () {
    btn.innerText = 'Search'
    userInput.focus()
}

userInput.addEventListener('keypress', function (event) {
    console.log(event.key)
    if (event.key === 'Enter') {
        console.log("ENTER")
        showMovieInfo()
    }
})

refreshBtn.addEventListener('click', function () {
    card.classList.remove('hide')
    movieCard.innerHTML = ''
})

async function showMovieInfo() {

    console.log("In Click Event")
    const url = `http://www.omdbapi.com/?apikey=584740cb&t=${userInput.value}`
    try {
        const response = await fetch(url)
        const data = await response.json()
        if (data.Response === "False") {
            userInput.value = ''
            const randomEmoji = Math.ceil(Math.random() * 17)
            movieCard.innerHTML = `
            <div class="alert">
            <h3>
             ${randomEmoji === 12 ?
                    "Find one or I'll shoot.." :
                    randomEmoji === 15 ?
                        "Mm-mm!  Mm!  Mmm!!" :
                        "Movie's not found"}</h3>
                <img id="smily" src="./assets/img/smily${randomEmoji}.jpg"/>
            </div>
            `
        } else {
            userInput.value = ''
            movieCard.innerHTML = `                
                <img id="movieImg" style="margin-top:25rem" src="${data.Poster}"/>
                <p id="movie-title">${data.Title} (${data.Year})   <img id="icon-hourglass" src="./assets/img/hourglass-tr.png" alt="hourglass sand duration" class="tiny-img"/><span id="movie-runtime">${data.Runtime.replace("min", "\'")}</span></p>
                <div class="hovering-container">
                <p id="movie-rated" style=${data.Rated === "R" ? "color:red" : "color:white"}>${data.Rated === "N/A" ? '' : "Rated-" + data.Rated}</p>    
                </p>
                <p id="movie-genre"><span>Genre</span></br> ${data.Genre}</p>
                <p id="movie-plot"><span>Plot</span></br>${data.Plot}</p>
                <p id="movie-director"><span>Director</span></br>${data.Director}</p>
                <p id="movie-actors"><span>Cast</span></br>${data.Actors}</p>
                 <p class="movie-rating">
                 <span>                   
                <img id="logo-meta" src="./assets/img/logo-meta-tr.png" alt="meta critic logo" class="tiny-img">
                ${data.Ratings[2].Value}            
                        <img id="logo-imdb" src="./assets/img/logo-imdb-tr.png" alt="imdb logo" class="tiny-img"/>
                 ${data.Ratings[0].Value}  
                <img id="logo-rotten" src="./assets/img/logo-rotten-tr.png" alt="rotten tomatoes logo" class="tiny-img">${data.Ratings[1].Value}
                </span>
                </p>
                <div class="movie-info-container">                
                <div class="movie-info">
                <p><span>Language</span>${data.Language}</p>
                </div>
                <div class="movie-info">
                <p><span>Released</span>${data.Released}</p>
                </div>
                <div class="movie-info">
                <p><span>Country</span>${data.Country}</p>
                </div>
                </div>
                </div>
                `
            movieCard.querySelector('img').addEventListener('click', function () {
                window.open(`https://www.imdb.com/title/${data.imdbID}`, '_blank')
            })  
            card.classList.add('hide')
        }
    } catch (err) {
        console.log(err)
    }
}





