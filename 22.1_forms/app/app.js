'use strict'

console.log('run')
const form = document.getElementById('form')
const userName = document.querySelector('#user-name')
const userAge = document.querySelector('#user-age')
const userEmail = document.querySelector('#user-email')


form.addEventListener('submit', function(e) {
    e.preventDefault()
    let confirm = document.querySelector('.confirm')
   confirm.classList.remove('visible')
    let change = document.querySelector('.change')
    let name = userName.value
    let age = userAge.value
    let email = userEmail.value
    let text = document.querySelector('.details')

    text.style.flexDirection = 'column'
    text.textContent = `Name: ${name}, Age: ${age}, Email: ${email}`
    const confirmButton = document.querySelector('#confirm-button')
    confirmButton.addEventListener('click', function() {
        const congrats = document.querySelector('#congrats')
        congrats.classList.remove('visible')
        confirm.classList.add('visible')
        change.classList.add('visible')
        }
    )

    let changeButton = document.querySelector('#change-button')
    changeButton.addEventListener('click', function() {
        userName.value = ''
        userAge.value = ''
        userEmail.value = ''
    }
    )
    
})

console.log('run2')






