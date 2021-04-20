// 6 - Напишите функцию,
// которая разделяет массив
// на части заданного размера.

const data = [1, 2, 3, 4, 5, 6, 7];

const chunk = (arr, step) => {
  const tmpArr = [];
  for (let i = 0; i < arr.length; i += step) {
    tmpArr.push(arr.slice(i, i + step));
  }
  return tmpArr;
};

// const chunk = (arr, step) => {
//   let tmpIndex = 0;

//   return arr.reduce((acc, cur, ind) => {
//     if (ind === tmpIndex) {
//       acc.push(arr.slice(tmpIndex, tmpIndex + step));
//       tmpIndex += step;
//     }
//     return acc;
//   }, []);
// };

// const chunk = (arr, step) => {
//   return arr.reduce(
//     (acc, cur) => {
//       const tmpChunk = acc[acc.length - 1];
//       if (tmpChunk.length < step) {
//         tmpChunk.push(cur);
//       } else {
//         acc.push([cur]);
//       }
//       return acc;
//     },
//     [[]]
//   );
// };

console.log(chunk(data, 2));

// console.log(chunk(data, 2)); // [[1, 2], [3, 4], [5, 6], [7]]
// console.log(chunk(data, 3)); // [[1, 2, 3], [4, 5, 6], [7]]
// console.log(chunk(data, 4)); // [[1, 2, 3, 4], [5, 6, 7]]
