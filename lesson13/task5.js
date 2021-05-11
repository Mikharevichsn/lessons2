// 5 - Вставка элементов через insertBefore
// Дан элемент ul, а в нем li #elem.
// Вставьте перед элементом #elem новую li с текстом '!!!'.

const listEl = document.querySelector('.list');
const uniqueLiEl = document.querySelector('#unique');
// const uniqueLiEl = document.getElementById('unique');

const newLiEl = document.createElement('li');
newLiEl.textContent = '!!!';

listEl.insertBefore(newLiEl, uniqueLiEl);
