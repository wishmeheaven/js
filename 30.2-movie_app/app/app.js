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

function showMovieInfo() {

    const 
    fetch.url("http://www.omdbapi.com/?apikey=[a8100ac9-60e2-48c3-963b-2418e5d2ac05]&")
    .then

    let movieName = document.getElementById('movie-name').value

}