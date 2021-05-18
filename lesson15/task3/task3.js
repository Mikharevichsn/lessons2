// Пример 3 - Поле
// Сделайте поле из белых клеточек 4x4
// При клике на клеточку она должна менять цвет
// с белого на черный,
// с черного на белый
// Под таблицей должна быть кнопка «поменять цвета».
// При ее нажатии все цвета клеточек меняются
// на противоположные.

const parent = document.querySelector('.parent');
const btn = document.querySelector('.reverse');
// const blocks = document.querySelectorAll('.block');

// function reverseActiveClasses() {
//   blocks.forEach((block) => {
//     block.classList.toggle('active');
//   });
// }

parent.addEventListener('click', (event) => {
  if (!event.target.classList.contains('block')) return;

  event.target.classList.toggle('active');
});

// btn.addEventListener('click', reverseActiveClasses);

btn.addEventListener('click', () => {
  parent.classList.toggle('reversed');
});
