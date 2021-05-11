// 9 - Родители
// Дан элемент #products.
// Найдите его родителя и покрасьте его в красный цвет.

// Найдите родителя его родителя и покрасьте его в синий цвет.

const productsEl = document.querySelector('#products');

console.log(productsEl.parentElement);
productsEl.parentElement.style.backgroundColor = 'red';
productsEl.parentElement.parentElement.style.backgroundColor = 'blue';
