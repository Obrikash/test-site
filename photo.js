document.addEventListener('DOMContentLoaded', () => {
    const studentPhoto = document.querySelector('img[alt="Фото автора сайта"]');

    // Исходный размер изображения
    const originalWidth = studentPhoto.offsetWidth;
    const originalHeight = studentPhoto.offsetHeight;

    // Обработчик события mouseover
    studentPhoto.addEventListener('mouseover', () => {
        studentPhoto.style.width = originalWidth * 1.1 + 'px';
        studentPhoto.style.height = originalHeight * 1.1 + 'px';
        studentPhoto.style.transition = 'all 0.3s'; // Плавный эффект увеличения
    });

    // Обработчик события mouseout (возврат к исходным размерам)
    studentPhoto.addEventListener('mouseout', () => {
        studentPhoto.style.width = originalWidth + 'px';
        studentPhoto.style.height = originalHeight + 'px';
    });

    // Обработчик события click (замена изображения)
    studentPhoto.addEventListener('click', () => {
        studentPhoto.src = 'images/favorite_teacher.jpeg';
        studentPhoto.alt = 'Фото любимого преподавателя';
    });

    studentPhoto.addEventListener('dblclick', () => {
        alert('Не налегай, у меня не так много любимых преподавателей');
    });    
});

document.addEventListener('DOMContentLoaded', () => {
    // Анимация для параграфа текста
    const paragraph = document.querySelector('p');
    if (paragraph) {
        paragraph.addEventListener('click', () => {
            paragraph.style.backgroundColor = paragraph.style.backgroundColor === 'lightblue' ? 'white' : 'lightblue';
        });
    }
});
