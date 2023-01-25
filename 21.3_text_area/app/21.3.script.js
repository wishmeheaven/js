/*Create a webpage that has part of the application
process for a job.This page should have a text area
field and a button.Your user must enter at least 100
characters before clicking the button.If he didn’t, please
give him the appropriate message. (using alert is
forbidden)*/


const submitBtn = document.getElementById("btn-submit")
const pMessage = document.getElementById("p-message")
const textArea = document.getElementById("user-message")
const charsLeft = document.getElementById("charsLeft")
charsLeft.textContent = `${100 - textArea.value.length}`
charsLeft.style.fontSize = "1.25rem"
charsLeft.style.fontWeight = "bold"
charsLeft.style.borderRadius = "20px"
charsLeft.style.padding = "2px"
charsLeft.style.width ="2.5%"
charsLeft.style.textAlign = "center"


charsLeft.style.backgroundColor = "red";

textArea.addEventListener("input", () => {
    `${100 - textArea.value.length}` < 100 ?
        charsLeft.textContent = `0${100 - textArea.value.length}` :
        `${100 - textArea.value.length}` < 10 ?
            charsLeft.textContent = `00${100 - textArea.value.length}` :
            charsLeft.textContent = `${100 - textArea.value.length}`

    console.log("charsLeft.textContent", charsLeft.textContent)
    console.log("textArea.value.length", textArea.value.length)
    if (textArea.value.length >= 100) {
        let arr = textArea.value.split("")
        arr.splice(100, arr.length)
        textArea.value = arr.join("")
        charsLeft.textContent = "000"
        charsLeft.style.backgroundColor = "green"
        charsLeft.style.color = "white"
    } else if (textArea.value.length > 90 && textArea.value.length < 100) {
        charsLeft.textContent = `00${100 - textArea.value.length}`
        charsLeft.style.backgroundColor = "lightGreen"
        charsLeft.style.color = "black"
    } else if (textArea.value.length > 70 && textArea.value.length < 90) {
        charsLeft.style.backgroundColor = "yellow"
        charsLeft.style.color = "black"
    } else if (textArea.value.length > 30 && textArea.value.length < 70) {
        charsLeft.style.backgroundColor = "orange"
        charsLeft.style.color = "black"
    } else if (textArea.value.length > 0 && textArea.value.length < 30) {
        charsLeft.style.backgroundColor = "purple"
        charsLeft.style.color = "white"
    } else if (textArea.value.length === 0){
        charsLeft.textContent = `${100 - textArea.value.length}`
        charsLeft.style.backgroundColor = "red"
    }
})

submitBtn.addEventListener("click", () => {
    console.log("textArea.value.length", textArea.value.length)
    if (textArea.value.length < 100) {
        charsLeft.textContent = `${100 - textArea.value.length}`
        charsLeft.style.fontSize = ".85rem"
        pMessage.textContent = "Please enter at least 100 characters"
    } else {
        pMessage.textContent = "Thank you! We've received your message"
    }
})

