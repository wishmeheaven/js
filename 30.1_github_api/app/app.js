'use strict'
/*
Let's create a small app that will have an input field. When
you type a user’s name in the input field you will fetch from
the GitHub API that particular user's information and displays a
card of the user's information.
That card should have at least the following:
1. Avatar image
2. Name of user
3. Number of public repos
When a user clicks on the card it will open a new page to
that user Github profile page.
*/


document.getElementById('btn').addEventListener('click',showGithubUserProfile)
const userInput = document.getElementById('gh-username')
const githubCard = document.getElementById('result')

window.onload = function() {
    userInput.focus()
}

userInput.addEventListener('keypress', function(event) {
    if ( event.key === 'Enter' ) {
        githubCard.innerText = ""
        userInput.innerText = userInput.value
        showGithubUserProfile()
    }
})

    
async function showGithubUserProfile() {
    const url = 'https://api.github.com/users/' + userInput.value
    try {
        const response = await fetch(url)    
        const data = await response.json()     
            if(data.message) {
                console.log(data.message)
                githubCard.innerHTML = `
                <h3>Profile Not Found</h3>
                `            
            } else {        
                userInput.value = ''
                githubCard.innerHTML = `
                <img src="${data.avatar_url}"
                style="width:12rem; height:12rem; cursor: pointer;"
                <p>${data.name ? data.name : ""} (${data.login})</p>
                <p>${data.bio ? data.bio : ""}</p>
                <p>Public Repos: ${data.public_repos}</p>
                `
                githubCard.querySelector('img').addEventListener('click', function() {
                    window.open(`https://github.com/${data.login}`, '_blank')
                })
            }
    } catch (err) {
        console.error(err)
    }  
}

