// script.js
let randomNumber = Math.floor(Math.random() * 100) + 1;
let guesses = 0;

function checkGuess() {
    let userGuess = parseInt(document.getElementById('guessInput').value);
    let message = '';

    guesses++;

    if (userGuess === randomNumber) {
        message = `Selamat! Anda menebak dengan benar dalam ${guesses} kali percobaan.`;
        resetGame();
    } else if (userGuess < randomNumber) {
        message = 'Tebakan Anda terlalu rendah!';
    } else if (userGuess > randomNumber) {
        message = 'Tebakan Anda terlalu tinggi!';
    }

    document.getElementById('message').textContent = message;
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    guesses = 0;
}
