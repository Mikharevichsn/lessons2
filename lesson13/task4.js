// 4 - Вставка элементов через appendChild
// Дан ol. Вставьте ему в конец li с текстом 'пункт'.

const box = document.querySelector('.box');

const olEl = document.createElement('ol');

const addLi = (text, listRef) => {
  const liEl = document.createElement('li');
  liEl.textContent = text;
  listRef.appendChild(liEl);
};

addLi('пункт 1', olEl);
addLi('пункт 2', olEl);
addLi('пункт 3', olEl);
addLi('пункт 4', olEl);

// console.log(olEl);

box.appendChild(olEl);

// Дан ul. Дан массив.
// Вставьте элементы этого массива в конец ul так,
// чтобы каждый элемент стоял в своем li.

const users = [
  'Сергеев Сергей',
  'Андреев Андрей',
  'Петрова Анна',
  'Иванов Иван',
];

const addInList = (arr, listRef) => {
  arr.forEach((elem) => {
    const liEl = document.createElement('li');
    liEl.textContent = elem;
    listRef.appendChild(liEl);
  });
};

const ulEl = document.createElement('ul');

addInList(users, ulEl);

box.appendChild(ulEl);

console.log(ulEl);
