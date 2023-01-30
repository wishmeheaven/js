/*Instructions:
Generate a random letter and create the following logic
depending if the user guessed the right letter or not:
The user guessed it right
● Display a message that the user was right.
● The message should be in the color green.
● Show the right letter to the user.
● Display a message if he wants to play again with a confirm
button.
● If the user wants to play again reset the DOM as it was in
    the beginning.
User guessed wrong
● Display a message that the user got wrong.
● The message should be in the color red.
● Display all the letters the user has guessed
● Users cannot type the same letter twice.If the user did so,
    display a message that he already guessed the letter.
        Constraints
● A user can only guess a valid alphabetical letter.If the
user types a non - alphabetical letter, display a message
that this is not allowed.
● When the game is finished, a user cannot guess a letter
until he presses the confirm button to start a new game.
● show guesses
● If the letter already guessed message to them
● If a letter is not the guess then display a message wrong
guess
● If a letter is you are correct message and display the right
key then show an option to start the game again.
● When asking for a new game, the user is not able to enter
any more keys until he confirms
*/

// Path: 22.3_guess_a_letter\app\app.js

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
const input = document.querySelector("input");
const message = document.querySelector(".message");
const guesses = document.querySelector(".guesses");
const endgame = document.querySelector(".endgame");
const newGame = document.querySelector("#new-game-btn");
const instruction = document.querySelector(".instruction");

const randomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    // console.log("color",color);
    return color;
};
let boxShadow = "inset 1px 1px 50px 1p " + randomColor()
newGame.style.boxShadow = boxShadow

const guessedLetters = [];
let gameOver = false;
console.log("randomLetter: ", randomLetter);
message.style.color = "transparent";

input.addEventListener("keyup", (e) => {
    // if (gameOver) return;
    if (e.key === "Enter") {
        const guess = e.target.value;
        if (guess.length !== 1) {
        message.textContent = "Please enter a single letter";
        message.style.color = "red";
        return;
        }
        if (guessedLetters.includes(guess)) {
        message.textContent = "You already guessed that letter";
        message.style.color = "red";
        return;
        }
        if (guess === randomLetter) {
        message.textContent = "You are correct!";
        message.style.color = "lightgreen";
        endgame.classList.remove('hidden')
        guesses.classList.add('hidden')
        instruction.classList.add('hidden')
        gameOver = true;
        } else {
        message.textContent = "You are wrong";
        message.style.color = "red";
        guessedLetters.push(guess);
        guesses.textContent = guessedLetters.join(", ");
        }
        e.target.value = "";
    }
    }
);

newGame.addEventListener('click', () => {
    window.location.reload()
})






