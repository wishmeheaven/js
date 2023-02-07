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

function showGithubUserProfile(){

    let username = document.getElementById('gh-username').value
    
    let url = 'https://api.github.com/users/' + username
    fetch(url).then(resolve => resolve.json())
    .then(data => {
        if(data.message){
            console.log(data.message)
            document.getElementById('result').innerHTML = `
            <h3>Profile Not Found</h3>
            `            
        } else {
            console.log(data)
            document.getElementById('result').innerHTML = `
            <img src="${data.avatar_url}"
            style="width:100%">
            <p>${data.name ? data.name : ""} (${data.login})</p>
            <p>${data.bio ? data.bio : ""}</p>
            <p>Public Repos: ${data.public_repos}</p>
            `
        }
        
    }).catch(error => {
        console.log(error)
    })
}

