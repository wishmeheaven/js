"use-strict"

// 1. Get the user's age
// 2. Check if the user's age is above 18
// 3. If the user's age is above 18, display "you can drink"
// 4. If the user's age is below 18, display "you're too young"



const checkAge = () => {
    let age = document.getElementById("age").value;    
    if (age >= 18) {
        document.getElementById("result").innerHTML = "you can drink";
    } else {
        document.getElementById("result").innerHTML = "you're too young";
    }
}

const button = document.getElementById("btn");
button.addEventListener("click", checkAge);

