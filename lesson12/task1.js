// Выполнить сортировку массива цен по убыванию и возрастанию.

const prices = [2, 14, 1, 37, 26, 8];

const pricesInAscendingOrder = [...prices].sort((a, b) => a - b);
const pricesInDescendingOrder = [...prices].sort((a, b) => b - a);

console.log(prices);
console.log(pricesInAscendingOrder);
console.log(pricesInDescendingOrder);
