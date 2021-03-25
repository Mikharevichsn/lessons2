// Напишите функцию calculateAverage()
// которая принимает произвольное кол-во аргументов
// и возвращает их среднее значение.
// Все аругменты будут только числами.

const calculateAverage = function () {
  let sum = 0;
  for (let argument of arguments) {
    sum += argument;
  }
  return sum / arguments.length;
};

console.log(calculateAverage(1, 2, 3, 4)); // 2.5
console.log(calculateAverage(14, 8, 2)); // 8
console.log(calculateAverage(27, 43, 2, 8, 36)); // 23.2
