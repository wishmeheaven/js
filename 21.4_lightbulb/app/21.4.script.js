/*Create a webpage that has an image of a lightbulb.
When the user clicks the lightbulb, it should be turned
on, clicking it again will turn it off*/

const lightBulb = document.getElementById("lightbulb")
lightBulb.style.width = "50rem"
lightBulb.style.height = "50rem"


const lightBulbImgOff = document.createElement("img")
lightBulbImgOff.src = "./assets/images/bulb-off.jpg"
// lightBulbImgOff.style.width = "30rem"
// lightBulbImgOff.style.height = "30rem"
lightBulbImgOff.style.borderRadius = "30px"
lightBulbImgOff.style.border = "1px solid rgb(255, 212, 132)"
lightBulb.appendChild(lightBulbImgOff)

const lightBulbImgOn = document.createElement("img")
lightBulbImgOn.src = "./assets/images/bulb-on.png"
lightBulbImgOn.style.borderRadius = "30px"
lightBulbImgOn.style.border = "1px solid  rgb(30, 101, 255)"




// const lightBulbImgOn = "./assets/images/bulb-on.png"
// const lightBulbImgOff = "./assets/images/bulb-off.jpg"


// lightbulb.style.width = "30rem"
// lightbulb.style.height = "30rem"
// lightbulb.style.borderRadius = "50%"
// lightbulb.style.border = "1px solid rgb(242, 236, 199)"
// lightBulb.style.background = "url(./assets/images/bulb-off.jpg) no-repeat center center"

let isOn = false
lightBulb.addEventListener("click", () => {
    console.log("lightBulb clicked")
    isOn = !isOn
    if (isOn) {
        lightBulb.appendChild(lightBulbImgOn)
        lightBulb.removeChild(lightBulbImgOff)
        lightBulbImgOn.style.width = "30rem"
        lightBulbImgOn.style.height = "40rem"
    } else {
        lightBulb.appendChild(lightBulbImgOff)
        lightBulb.removeChild(lightBulbImgOn)
    }
})



