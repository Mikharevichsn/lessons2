// Выполнить сортировку массива объектов:

// по возрастанию и убыванию значения свойства price.
// по имени в алфавитном и обратном алфавитном порядке.

const items = [
  { name: 'SAMSUNG', price: 15000 },
  { name: 'LG', price: 9000 },
  { name: 'ASUS', price: 27000 },
  { name: 'DELL', price: 12000 },
  { name: 'BENQ', price: 7000 },
];
// По свойству price
const itemsByAscendingPrice = [...items].sort((a, b) => a.price - b.price);
const itemsByDescendingPrice = [...items].sort((a, b) => b.price - a.price);

console.log(itemsByAscendingPrice);
console.log(itemsByDescendingPrice);

// По свойству name
const itemsInAlphabeticalOrder = [...items].sort((a, b) =>
  a.name.localeCompare(b.name)
);
const itemsInDescAlpahbeticalOrder = [...items].sort((a, b) =>
  b.name.localeCompare(a.name)
);

console.log(itemsInAlphabeticalOrder);
console.log(itemsInDescAlpahbeticalOrder);
