// Напиши функцию findLargestNumber(numbers)
//которая ищет самое большое число в массиве.

// const findLargestNumber = function (numbers) {
//   let result = numbers[0];
//   for (let number of numbers) {
//     if (number > result) {
//       result = number;
//     }
//   }
//   return result;
// };

// console.log(findLargestNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
// console.log(findLargestNumber([49, 4, 83, 7, 12])); // 83

const findSmallestNumber = function (numbers) {
  let result = numbers[0];
  for (let number of numbers) {
    if (number < result) {
      result = number;
    }
  }
  return result;
};

console.log(findSmallestNumber([1, 2, 3, 4, 5, 6, 7, -8, 9, 10]));
