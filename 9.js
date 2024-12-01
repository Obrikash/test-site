let name = prompt("Как вас зовут?");
let age = prompt("Сколько вам лет?");
age = Number(age);
alert(`Привет, ${name}! Вам ${age} лет.`);
console.log(`Привет, ${name}! Вам ${age} лет.`);
if (age >= 18) {
    alert("Вы совершеннолетний.");
    console.log("Вы совершеннолетний.");
} else {
    alert("Вы несовершеннолетний.");
    console.log("Вы несовершеннолетний.");
}