
// Пример 3 перепешите функцию сортировки
// с использованием деструктуризации
// для перестановки элементов

const arr = ['HTML', 'JavaScript', 'CSS'];

const sortArr = (array) => {
    const myArr = [...array];
    console.log(myArr);
    
    for (let i = myArr.length; i > 0; i -= 1) {
      for (let j = 0; j < i; j += 1) {
        if (myArr[j] > myArr[j + 1]) {
        //   const tmp = myArr[j];
        //   myArr[j] = myArr[j + 1];
        //   myArr[j + 1] = tmp;
          [myArr[j], myArr[j + 1]] = [myArr[j + 1], myArr[j]];
        }
      }
    }
    return myArr;
}

console.log(sortArr(arr));