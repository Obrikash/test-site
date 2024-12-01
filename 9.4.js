const correctPassword = "12345";

let userPassword = prompt("Введите пароль:");

// Проверка, что пароль не пустой и совпадает с заданным
if (userPassword && userPassword === correctPassword) {
    alert("Доступ разрешен");
    console.log("Доступ разрешен");
} else {
    alert("Доступ запрещен");
    console.log("Доступ запрещен");
}
