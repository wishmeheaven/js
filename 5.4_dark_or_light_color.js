// The following exercise contains the following subjects:
// ● Switch
// Instructions
// Create a function that receives one argument, a string color.
// Create a switch statement that:
// 1. If the color is yellow, pink, or orange return from the
// function “light color”.
// 2. If the color is a blue, purple, or brown return from the
// function “dark color”.
// 3. If the color is none of the above return “Unknown color”.
// Note:
// It shouldn’t be case sensitive

function checkBrightness(colorToCheck){

    switch (colorToCheck){

        case "yellow":
            case "pink":
                case "orange":
                     colorToCheck = "light color"; break;
        case "blue":
            case "purple":
                case "brown":
                    colorToCheck = "dark color"; break;

        default: colorToCheck = "unknown color"
    }

    return colorToCheck
}

console.log(checkBrightness("blue"))
console.log(checkBrightness("black"))
console.log(checkBrightness("orange"))
