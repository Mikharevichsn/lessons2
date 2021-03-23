// Вернуть отсортированную копию по алфавиту
// (не меняя исходный массив)

const arr = ['HTML', 'JavaScript', 'CSS'];
// const arr = [500, 5, 3, 7, 10];

const myArr = Array.from(arr);
console.log(myArr);

for (let i = myArr.length; i > 0; i -= 1) {
  for (let j = 0; j < i; j += 1) {
    if (myArr[j] > myArr[j + 1]) {
      const tmp = myArr[j];
      myArr[j] = myArr[j + 1];
      myArr[j + 1] = tmp;
    }
  }
}

console.log(myArr);

// const arr = [1, 2];
// console.log(arr);

// const tmp = arr[0];
// arr[0] = arr[1];
// arr[1] = tmp;

// console.log(arr);
