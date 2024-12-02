document.addEventListener("DOMContentLoaded", () => {
    const formData = {
        name: "",
        email: "",
        phone: "",
        date: "",
        comments: "",
        printData: function () {
            console.log(`Имя: ${this.name}`);
            console.log(`E-mail: ${this.email}`);
            console.log(`Телефон: ${this.phone}`);
            console.log(`Дата: ${this.date}`);
            console.log(`Комментарий: ${this.comments}`);
        },
    };

    function submitForm(event) {
        event.preventDefault();

        // Получение значений из формы
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const date = document.getElementById("dateChoice").value.trim();
        const comments = document.getElementById("comments").value.trim();

        // Проверки
        if (!name || !email || !comments) {
            alert("Пожалуйста, заполните обязательные поля (Имя, E-mail, Комментарий).");
            return;
        }

        const phoneRegex = /^\d+$/;
        if (!phoneRegex.test(phone)) {
            alert("Телефон должен содержать только цифры.");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Введите корректный E-mail.");
            return;
        }

        // Запись данных в объект
        formData.name = name;
        formData.email = email;
        formData.phone = phone;
        formData.date = date || "Не указана";
        formData.comments = comments;

        // Вывод данных в консоль
        formData.printData();

        // Сообщение об успешной отправке
        alert("Форма успешно отправлена!");
    }

    // Добавляем обработчик события на кнопку отправки
    const form = document.querySelector("form");
    form.addEventListener("submit", submitForm);
});

document.addEventListener("DOMContentLoaded", function () {
    // Найти форму по ID
    const orderForm = document.querySelector("form");

    // Добавить обработчик события "submit"
    orderForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Отменить стандартное поведение отправки формы

        // Создать сообщение
        const message = document.createElement("p");
        message.textContent = "Форма отправлена!";
        message.style.color = "green";
        message.style.fontSize = "1.5rem";
        message.style.fontWeight = "bold";
        message.style.opacity = "0";
        message.style.transition = "opacity 1s ease-in-out";

        // Вставить сообщение перед кнопкой отправки
        const submitButton = orderForm.querySelector("button[type='submit']");
        orderForm.insertBefore(message, submitButton);

        // Запуск анимации (плавное появление текста)
        setTimeout(() => {
            message.style.opacity = "1";
        }, 100);

        // Удалить сообщение через 3 секунды
        setTimeout(() => {
            message.remove();
        }, 3000);

        // Сбросить значения формы
        orderForm.reset();
    });
});
