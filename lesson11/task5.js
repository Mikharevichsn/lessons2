// 5 - Перемешивание
// Напишите функцию shuffle,
// которая принимает массив и возвращает новый,
// с теми же элементами, но в случайном порядке.

const numbers = [8, 9, 1, 2, 3, 4, 5, 6, 0, 100, 205, 401, -100];

// const shuffle = (arr) => {
//   return arr.sort((a, b) => Math.random() - 0.5);
// };

const shuffle = (arr) => arr.sort((a, b) => Math.random() - 0.5);

console.log(shuffle(numbers));

// console.log(numbers.sort());

// console.log(
//   numbers.sort((a, b) => {
//     if (a < b) {
//       return -1;
//     }
//     if (a > b) {
//       return 1;
//     }
//     return 0;
//   })
// );

// console.log(numbers.sort((a, b) => a - b));

// --------------------

// const users = [
//   { id: 500, name: 'Kolya' },
//   { id: 123, name: 'Petya' },
//   { id: 321, name: 'Andrew' },
//   { id: 222, name: 'Serjo' },
//   { id: 444, name: 'Anna' },
//   { id: 1, name: 'Maria' },
// ];

// console.log(users);

// console.log(
//   users.sort((a, b) => {
//     if (a.id < b.id) {
//       return -1;
//     }
//     if (a.id > b.id) {
//       return 1;
//     }
//     // a должно быть равным b
//     return 0;
//   })
// );

// console.log(users.sort((a, b) => a.id - b.id));
