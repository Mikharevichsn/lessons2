// Пример 3 - Напишите функцию getAverage(numbers), 
// которая принимает массив чисел и возвращает среднее

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const getAverage = (arr) => {
    const total = arr.reduce((acc, cur) => acc + cur);
    return total / arr.length;
    // return arr.reduce((acc, cur) => acc + cur) / arr.length;
}

console.log(getAverage(numbers));
console.log(getAverage([1,1,1,1,1]));
console.log(getAverage([2,2,2,2,2]));