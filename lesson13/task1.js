// 1 - Классы
// Дан элемент #elem.
// Добавьте ему класс www.

const elem = document.querySelector('#elem');
const btn = document.querySelector('.btn');
console.log(elem);

elem.classList.add('www');

// Удалите у него класс www.
// elem.classList.remove('www');

// Проверьте наличие у него класса www.
console.dir(elem.classList);

console.log(elem.classList.contains('www'));

// Добавьте ему класс www, если его нет и удалите - если есть.

btn.addEventListener('click', () => {
  //   if (elem.classList.contains('www')) {
  //     elem.classList.remove('www');
  //   } else {
  //     elem.classList.add('www');
  //   }
  elem.classList.toggle('www');
});

// Узнайте количество его классов.
console.log(elem.classList.length);

// Выведите последовательно алертом его классы.
console.log(elem.classList);
elem.classList.forEach((elem) => {
  alert(elem);
});
