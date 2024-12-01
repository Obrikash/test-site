function filterLecturesByLetter(lectures, letter) {
    return lectures.filter(lecture => lecture.startsWith(letter));
}

const lectures = ['Тема 1', 'Организация работы', 'Общая теория', 'Тема 4', 'Отчетность'];

const filteredLectures = filterLecturesByLetter(lectures, 'О');

console.log("Темы лекций, начинающиеся на 'О':", filteredLectures);