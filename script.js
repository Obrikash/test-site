const modal = document.getElementById("modal");
const btn = document.getElementById("openModal");
const span = document.getElementsByClassName("close")[0];
const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");
const header = document.querySelector("header"); // Получаем элемент header
// Открываем модальное окно при нажатии на кнопку
btn.onclick = function() {
    modal.style.display = "block";
}

// Закрываем модальное окно при нажатии на "X"
span.onclick = function() {
    modal.style.display = "none";
}

// Закрываем модальное окно при клике вне его области
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
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
