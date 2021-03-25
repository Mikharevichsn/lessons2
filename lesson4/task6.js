// Напишите функции для работы с коллекцией обучающих курсов courses:

// addCourse(name) - добавляет курс в конец коллекции
// removeCourse(name) - удаляет курс из коллекции
// updateCourse(oldName, newName)- изменяет имя на новое

const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

const addCourse = (name) => {
  courses.push(name);
};

const removeCourse = (name) => {
  const index = courses.indexOf(name);
  if (index < 0) {
    console.log('Ошибка! Нет такого курса');
    return;
  }

  courses.splice(index, 1);
};

const updateCourse = (oldName, newName) => {
  const index = courses.indexOf(oldName);
  if (index < 0) {
    console.log('Ошибка! Нет такого курса');
    return;
  }

  // courses[index] = newName;
  courses.splice(index, 1, newName);
};

console.log(courses);
addCourse('Новый курс');
console.log(courses);

removeCourse('JavaScript');
console.log(courses);

updateCourse('CSS', 'SCSS');
console.log(courses);
