let num1 = parseFloat(prompt("Введите первое число:"));
let num2 = parseFloat(prompt("Введите второе число:"));
let operator = prompt("Введите оператор (+, -, *, /):");

let result;

if (operator === '+') {
    result = num1 + num2;
} else if (operator === '-') {
    result = num1 - num2;
} else if (operator === '*') {
    result = num1 * num2;
} else if (operator === '/') {
    if (num2 !== 0) {
        result = num1 / num2;
    } else {
        alert("Ошибка: деление на ноль!");
        console.log("Ошибка: деление на ноль!");
    }
} else {
    alert("Неверный оператор");
    console.log("Неверный оператор");
}

if (result !== undefined) {
    alert("Результат: " + result);
    console.log("Результат: " + result);
}
