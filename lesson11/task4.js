// 4 - Напишите функцию unique(arr),
// которая возвращает массив,
// содержащий только уникальные элементы arr

const notUniqueNumbers = [1, 2, 3, 1, 3, 2, 4, 5, 4, 7, 5];

const unique = (arr) => {
  //   const result = [];
  //   arr.forEach((el) => {
  //     if (!result.includes(el)) {
  //       result.push(el);
  //     }
  //   });
  // return result;

  return arr.reduce((acc, cur) => {
    if (!acc.includes(cur)) {
      acc.push(cur);
    }
    return acc;
  }, []);
};

console.log(unique(notUniqueNumbers));
console.log(unique([1, 1, 1, 1, 1, 1, 1, 1]));
console.log(unique([1, 1, 2, 2, 3, 3]));
