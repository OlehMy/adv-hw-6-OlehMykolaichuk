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

// 1) Створіть функцію, яка повертає список предметів для конкретного студента
function getSubjects(students) {
    return Object.keys(students.subjects).map(word => word[0].toUpperCase() + word.slice(1).replace('_',' '))//.join(",").split(',');
}
console.log(`List of subjects for ${students[0].name}`,getSubjects(students[0]));

// 2) Створіть функцію, яка поверне середню оцінку по усім предметам для переданого студента НЕ МАСИВА СТУДЕНТІВ. Оцінку округліть до 2ого знаку
function getAverageMark(students) {
    const listOfAllMarks = Object.values(students.subjects).join(',').split(',');
    const sumOfAllMarks = listOfAllMarks.reduce((x, y) => (+x) + (+y), 0);
    return (sumOfAllMarks/listOfAllMarks.length).toFixed(2);
}
console.log(`Average mark in all subjects for ${students[0].name}:`, getAverageMark(students[0]));



console.log(students);

