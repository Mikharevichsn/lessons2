// Напишите функцию min(a,b)
//которая возвращает меньшее из чисел a и b.

// const min = function (a, b) {
//   let result = null;
//   if (a < b) {
//     result = a;
//   } else {
//     result = b;
//   }
//   return result;
// };

// const min = function (a, b) {
//   if (a < b) {
//     return a;
//   } else {
//     return b;
//   }
// };

const min = function (a, b) {
  return a < b ? a : b;
};

console.log(min(5, 6));
