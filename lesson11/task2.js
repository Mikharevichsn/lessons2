// Пример 2 - Напишите функцию filterRange(arr, a, b), 
// которая принимает массив arr, 
// ищет в нём элементы между a и b 
// и отдаёт массив этих элементов.
// Функция должна возвращать новый массив 
// и не изменять исходный.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const filterRange = (arr, a, b) => {
    return arr.filter(element => element >= a && element <= b);
}

// const filterRange = (arr, a, b) => {
//     const result = [];
//     arr.forEach(el => {
//         if (el >= a && el <= b) {
//             result.push(el);
//         }
//     });
//     return result;
// }


// console.log(filterRange(numbers, 3, 7));
// console.table(filterRange(numbers, 2, 5));
// console.log(filterRange(numbers, 6, 5));
