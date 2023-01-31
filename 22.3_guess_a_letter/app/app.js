
const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)].toUpperCase();
const input = document.querySelector("input");
const message = document.querySelector(".message");
const guesses = document.querySelector(".guesses");
const endgame = document.querySelector(".endgame");
const newGame = document.querySelector("#new-game-btn");
const instruction = document.querySelector(".instruction");
const secretLetter = document.querySelector("#secret");

const guessedLetters = [];
let gameOver = false;
console.log("randomLetter: ", randomLetter);
message.style.color = "transparent";

input.addEventListener("keyup", (e) => {
    // if (gameOver) return;
    if (e.key === "Enter") {
        const guess = e.target.value.toUpperCase();
        if (guess.length !== 1) {
            message.textContent = "Please enter a single letter";
            message.style.color = "red";
            return;
        }
        if (guessedLetters.includes(guess.toUpperCase())) {
            message.textContent = "You already guessed that letter";
            message.style.color = "red";
            return;
        }
        if (guess === randomLetter) {
            secretLetter.textContent = randomLetter.toUpperCase()
            secretLetter.style.boxShadow = "inset 0 0 20px 5px rgb(255, 0, 208)"
            secretLetter.style.color = "rgb(255, 133, 254)"
            message.textContent = "You are correct!"
            message.style.color = "rgb(43, 255, 0)"
            endgame.classList.remove('hidden')
            guesses.classList.add('hidden')
            instruction.classList.add('hidden')
            gameOver = true;
        } else {
            message.textContent = "You are wrong";
            message.style.color = "red";
            guessedLetters.push(guess.toUpperCase());
            guesses.textContent = guessedLetters.join(", ");
        }
        e.target.value = "";
    }
}
);

newGame.addEventListener('click', () => {
    window.location.reload()
})