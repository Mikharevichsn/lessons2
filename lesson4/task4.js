// Выполните рефакторинг заменив объявление функции на стрелочную функцию.

// function checkNumbers(a, b) {
//   if (a > b) {
//     return `число ${a} больше ${b}`;
//   }

//   return `число ${b} больше ${a}`;
// }

const checkNumbers = (a, b) => {
  if (a > b) {
    return `число ${a} больше ${b}`;
  }

  return `число ${b} больше ${a}`;
};
