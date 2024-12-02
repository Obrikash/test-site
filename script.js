const h1Elem = document.querySelector('h1');
if (h1Elem) {
    h1Elem.textContent = 'Добро пожаловать на наш сайт!';
}

// 2. Изменить цвет текста заголовка H2 на красный
const h2Element = document.querySelector('h2');
if (h2Element) {
    h2Element.style.color = 'red';
}

// 3. Найти и изменить текст первого параграфа на "Это новый текст параграфа."
const firstParagraph = document.querySelector('p');
if (firstParagraph) {
    firstParagraph.textContent = 'Это новый текст параграфа.';
}

// 4. Скрыть встроенное видео, установив его стиль display на none
const videoElement = document.querySelector('video');
if (videoElement) {
    videoElement.style.display = 'none';
}

window.onscroll = function() {
    const button = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showMessage(message) {
    console.log(message);
}

function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

function toggleVisibility(selector) {
    const element = document.querySelector(selector);
    if (element) {
        const currentDisplay = window.getComputedStyle(element).display;
        element.style.display = currentDisplay === "none" ? "block" : "none";
    } else {
        console.warn(`Элемент с селектором "${selector}" не найден.`);
    }
}

// Функция для обработки параметра utm_term в URL
function handleUTMTerm() {
    const urlParams = new URLSearchParams(window.location.search);
    const utmTerm = urlParams.get("utm_term");
    const h1Element = document.querySelector("h1");
    if (h1Element && utmTerm) {
        h1Element.textContent = utmTerm;
    }
}

function logCurrentTime() {
    const now = new Date();
    const formattedTime = now.toLocaleTimeString();
    console.log(`Текущее время: ${formattedTime}`);
}

// Функция для сброса цвета фона на исходное значение
function resetBackgroundColor() {
    document.body.style.backgroundColor = "white";
}

showMessage("Скрипт загружен!");
logCurrentTime();

document.addEventListener("DOMContentLoaded", () => {
    resetBackgroundColor();
    changeBackgroundColor("red");
    toggleVisibility(".content");
    handleUTMTerm();
    setTimeout(resetBackgroundColor, 5000);
});

// Обработчик события click для заголовка H1
document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("h1");
    if (header) {
        header.addEventListener("click", () => {
            alert("Вы кликнули на заголовок - так держать!");
        });
    }

    // Добавление кнопки "Посмотреть практики второго семестра"
    const tablePractices = document.querySelector(".main-first-sem .table-responsive");
    if (tablePractices) {
        const button = document.createElement("button");
        button.textContent = "Посмотреть практики второго семестра";
        button.classList.add("btn", "btn-primary", "my-3");
        tablePractices.insertBefore(button, tablePractices.firstChild);

        // Темы практик на 2-й семестр
        const secondSemesterTopics = [
            "Базовое бэкенд-приложение",
            "HTTP-запросы",
            "JSON и работа с ним",
            "HTTP-ответы",
            "Проектирование API",
            "Роутинг и его настройка",
            "NoSQL базы данных",
            "Обеспечение авторизации и доступа пользователей",
            "Работа сторонних сервисов уведомления и авторизации",
            "Основы ReactJS",
            "Работа с компонентами динамической DOM",
            "Использование хуков в React",
            "Основы микросервисной архитектуры",
            "Разработка классических модулей веб-приложений",
            "Разработка классических модулей веб-приложений"
        ];

        // Обработчик для кнопки
        button.addEventListener("click", () => {
            const table = tablePractices.querySelector("table");
            if (table) {
                // Очистка текущей таблицы
                table.innerHTML = `
                    <tr id="first-row">
                        <th>Номер</th>
                        <th>Тема</th>
                        <th>Посещение</th>
                        <th>Выполнение</th>
                    </tr>
                `;
                // Заполнение таблицы темами второго семестра
                secondSemesterTopics.forEach((topic, index) => {
                    const row = document.createElement("tr");
                    row.innerHTML = `
                        <td>${index + 1}</td>
                        <td>${topic}</td>
                        <td><input type="checkbox"></td>
                        <td><input type="checkbox"></td>
                    `;
                    table.appendChild(row);
                });
            }
            
        });
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleLecturesBtn');
    const lectureTable = document.querySelector('table');

    if (toggleButton && lectureTable) {
        toggleButton.addEventListener('click', () => {
            if (lectureTable.classList.contains('hidden')) {
                lectureTable.classList.remove('hidden');
                lectureTable.classList.add('visible');
                toggleButton.textContent = 'Скрыть лекции';
            } else {
                lectureTable.classList.remove('visible');
                lectureTable.classList.add('hidden');
                toggleButton.textContent = 'Показать лекции';
            }
        });
    }
});
