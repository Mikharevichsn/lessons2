// Сортировка строк
// Выполнить сортировку массива названий мониторов
//в алфавитном и обратном алфавитном порядке.

const items = ['SAMSUNG', 'LG', 'ASUS', 'DELL', 'BENQ'];
const itemsInAlphabeticalOrder = [...items].sort();
// const itemsInDescAlphabeticalOrder = [...items].sort().reverse();
const itemsInDescAlphabeticalOrder = [...items].sort((a, b) => {
  if (a < b) {
    return 1;
  }
  if (a > b) {
    return -1;
  }
  return 0;
});

console.log(itemsInAlphabeticalOrder);
console.log(itemsInDescAlphabeticalOrder);
