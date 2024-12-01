const lectures = ['Тема 1', 'Тема 2', 'Тема 3'];
const practices = ['Практика 1', 'Практика 2', 'Практика 3'];

lectures.push('Тема 4');
practices.unshift('Практика 0');

console.log("Лекции:");
lectures.forEach((lecture, index) => {
    console.log(`${index + 1}. ${lecture}`);
});

console.log("Практики:");
practices.forEach((practice, index) => {
    console.log(`${index + 1}. ${practice}`);
});

function arrayToString(arr) {
    return arr.join(', ');
}

console.log("Лекции в строку: " + arrayToString(lectures));
console.log("Практики в строку: " + arrayToString(practices));
