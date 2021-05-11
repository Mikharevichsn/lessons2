// 6 - Создание элементов
// Дан массив. Создайте ul через createElement,
// затем вставьте каждый элемент этого массива в отдельную li внутри этой ul,
// затем вставьте эту ul в конец body.

const arr = ['Toyota', 'Honda', 'Lada', 'Ford', 'Жигуль'];

const ulEl = document.createElement('ul');
arr.forEach((car) => {
  const liEl = document.createElement('li');
  liEl.textContent = car;
  ulEl.appendChild(liEl);
});

document.body.appendChild(ulEl);
