let randomNumber = Math.floor(Math.random() * 10) + 1;

let userGuess = prompt("Угадайте число от 1 до 10:");

userGuess = Number(userGuess);

if (userGuess === randomNumber) {
    alert("Поздравляем! Вы угадали число!");
    console.log("Поздравляем! Вы угадали число!");
} else {
    // Проверяем, меньше или больше 5
    if (userGuess < 5) {
        alert("Вы не угадали. Ваше число меньше 5.");
        console.log("Вы не угадали. Ваше число меньше 5.");
    } else {
        alert("Вы не угадали. Ваше число больше 5.");
        console.log("Вы не угадали. Ваше число больше 5.");
    }
}

console.log(`Случайное число было: ${randomNumber}`);
