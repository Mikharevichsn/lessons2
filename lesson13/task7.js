// 7 - Потомки
// Дан элемент #unique-list.
// Найдите первого потомка этого элемента
// и сделайте его текст красного цвета.

const listEl = document.querySelector('#unique-list');
const firstEl = listEl.firstElementChild;
console.log(firstEl);
firstEl.style.color = 'red';

// document.querySelector('#unique-list').firstElementChild.style.color = 'red';
