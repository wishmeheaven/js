"use-strict"

const page = document.querySelector("html")
page.style.backgroundColor = "white"

const body = document.querySelector("body")
body.style.display = "flex"
body.style.flexDirection = "column"
body.style.justifyContent = "center"
body.style.fontFamily = "roboto"
body.style.fontSize = "1.25rem"
body.style.textAlign = "center"
body.style.backgroundColor = "lightblue"
body.style.height = "100vh"
body.style.padding = "2rem"
body.style.borderRadius = "50px"
body.style.boxShadow = "inset 0 0 50px 50px #fff"

const title = document.createElement("h1")
const text = document.getElementById("text")
const increaseButton = document.getElementById("btn-increase")
const decreaseButton = document.getElementById("btn-decrease")
const resetButton = document.getElementById("btn-reset")



const buttons = document.querySelectorAll("button")
for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.display = "flex"
    buttons[i].style.justifyContent = "center"
    buttons[i].style.alignItems = "center"
    buttons[i] === resetButton ? buttons[i].style.fontSize = "1rem" : buttons[i].style.fontSize = "2rem"
    buttons[i].style.width = "50px"
    buttons[i].style.height = "50px"
    buttons[i].style.borderRadius = "50%"
    buttons[i].style.border = "none"
    buttons[i].style.backgroundColor = "black"
    buttons[i].style.color = "white"
    buttons[i].style.margin = "10px"
}


const container = document.createElement("div")
container.style.display = "flex"
container.style.justifyContent = "center"
container.style.alignItems = "center"
container.style.margin = "20px"
body.appendChild(container)
container.appendChild(increaseButton)
container.appendChild(resetButton)
container.appendChild(decreaseButton)


const increaseFontSize = () => {
    const currentFontSize = parseInt(window.getComputedStyle(text).fontSize)
    if (currentFontSize < 100) {
        text.style.fontSize = `${currentFontSize + 1}px`
    }
}

const decreaseFontSize = () => {
    const currentFontSize = parseInt(window.getComputedStyle(text).fontSize)
    if (currentFontSize > 6) {
        text.style.fontSize = `${currentFontSize - 1}px`
    }
}

const resetFontSize = () => {
    text.style.fontSize = "1rem"
}

increaseButton.addEventListener("click", increaseFontSize)
decreaseButton.addEventListener("click", decreaseFontSize)
resetButton.addEventListener("click", resetFontSize)
