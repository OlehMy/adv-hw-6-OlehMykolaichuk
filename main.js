const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
}, {
    name: "Victor",
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
    }
}, {
    name: "Anton",
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
    }
}];

const someStudent = students[0]; // Enter a value for function #1-3;
const someWord = 'Cursor'; // Enter a value for function #6;

// 1) Створіть функцію, яка повертає список предметів для конкретного студента
function getSubjects(students) {
    return Object.keys(students.subjects).map(subject => subject[0].toUpperCase() + subject.slice(1).replace('_', ' '));
}
console.log(`List of subjects for ${someStudent.name}`, getSubjects(someStudent));

// 2) Створіть функцію, яка поверне середню оцінку по усім предметам для переданого студента НЕ МАСИВА СТУДЕНТІВ. Оцінку округліть до 2ого знаку
function getAverageMark(students) {
    const listOfAllMarks = Object.values(students.subjects).join(',').split(',');
    const sumOfAllMarks = listOfAllMarks.reduce((x, y) => (+x) + (+y), 0);
    return (sumOfAllMarks / listOfAllMarks.length).toFixed(2);
}
console.log(`Average mark in all subjects for ${someStudent.name}:`, getAverageMark(someStudent));

// 3) Створіть функцію, яка повертає інформацію загального виду по переданому студенту
function getStudentInfo(students) {
    const studentInfo = {
        course: students.course,
        name: students.name,
        averageMark: getAverageMark(students),
    }
    return studentInfo;
}
console.log(`General information about the ${someStudent.name}`, getStudentInfo(someStudent));

// 4) Ствроіть функцію, яка повертає імена студентів у алфавітному порядку
function getStudentsNames(students) {
    return students.map(student => student.name).sort();
}
console.log('Names of students in alphabetical order', getStudentsNames(students));

// 5) Створіть функцію, яка повертає кращого студента зі списку по показнику середньої оцінки
function getBestStudent(students) {
    let averageMarkOfEachStudent = [];
      students.map((student, index) => {
      averageMarkOfEachStudent.push({
        name: students[index].name,
        averageMark: getAverageMark(students[index]),
      });
    });    
    averageMarkOfEachStudent.sort((a, b) => (+b.averageMark) - (+a.averageMark));
    return averageMarkOfEachStudent[0].name;
}
console.log('The best student on the average mark:', getBestStudent(students));

// 6) Створіть функцію, яка повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх повторень.
function calculateWordLetters(someWord) {
    const arrOfLettersOfWord = someWord.toLowerCase().split('');
    const lettersOfWord = {};
    for (const element of arrOfLettersOfWord) {
        lettersOfWord[element] = (arrOfLettersOfWord.filter((letter) => element === letter)).length;
    }
    return lettersOfWord;
}
console.log(`Object with letters of the word '${someWord}'`, calculateWordLetters(someWord));
