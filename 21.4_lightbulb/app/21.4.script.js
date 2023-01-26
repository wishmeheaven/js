/*Create a webpage that has an image of a lightbulb.
When the user clicks the lightbulb, it should be turned
on, clicking it again will turn it off*/



const h1 = document.createElement("h1")
h1.style.fontFamily = "Poppins, sans-serif"
h1.style.fontSize = "9rem"
h1.style.fontWeight = "bold"
h1.textContent = "Turn on the light"
h1.style.color = "black"
h1.style.textShadow = "2px 2px 2px red"
h1.style.textAlign = "center"
// h1.style.margin = "5rem"
h1.style.width = "100%"
document.body.appendChild(h1)

const lightBulb = document.getElementById("lightbulb")
lightBulb.style.width = "44rem"
lightBulb.style.height = "58rem"
lightBulb.style.margin = "0 auto"
lightBulb.style.paddingTop = "2rem"


const lightBulbImgOff = document.createElement("img")
lightBulbImgOff.src = "./assets/images/bulb-off.jpg"
lightBulbImgOff.style.borderTopLeftRadius = "50%"
lightBulbImgOff.style.borderTopRightRadius = "50%"
// lightBulbImgOff.style.paddingBottom = "5rem"
lightBulbImgOff.style.borderTop = "1px solid rgb(255, 212, 132)"
lightBulbImgOff.style.width = "100%"
lightBulbImgOff.style.marginTop = "12rem"
lightBulbImgOff.style.paddingTop = "2rem"
lightBulb.appendChild(lightBulbImgOff)

const lightBulbImgOn = document.createElement("img")
lightBulbImgOn.src = "./assets/images/bulb-on.png"
lightBulbImgOn.style.borderTopLeftRadius = "50%"
lightBulbImgOn.style.borderTopRightRadius = "50%"
lightBulbImgOn.style.borderTop = "1px solid  rgb(28, 28, 230)"
lightBulbImgOn.style.boxShadow = "0px 0px 100px 50px rgb(154, 154, 244)"
lightBulbImgOn.style.paddingRight = "2rem"  


let isOn = false
lightBulb.addEventListener("click", () => {
    console.log("lightBulb clicked")
    isOn = !isOn
    if (isOn) {
        h1.textContent = "Turn the light off"
        h1.style.textShadow = "15px 20px 20px rgb(154, 154, 244)"
        h1.style.color = " rgb(18, 0, 255)"    
        lightBulb.appendChild(lightBulbImgOn)
        lightBulb.removeChild(lightBulbImgOff)
        lightBulbImgOn.style.width = "44rem"
        lightBulbImgOn.style.height = "59rem"
        lightBulbImgOn.style.paddingTop = "8rem"
    } else {
        h1.textContent = "Turn the light on"
        h1.style.color = "black"
        h1.style.textShadow = "0px 1px 0px rgb(255, 212, 132)"
        lightBulb.appendChild(lightBulbImgOff)
        lightBulb.removeChild(lightBulbImgOn)
    
    }
})



