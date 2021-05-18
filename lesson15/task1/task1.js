// 1 - Дан блок, внутри кнопка.
// При наведении на кнопку, красить блок в красный цвет

// const card = document.querySelector('.card');
// const closeBtn = document.querySelector('.card__delete');

// closeBtn.addEventListener('mouseover', () => {
//   card.classList.add('active');
// });

// closeBtn.addEventListener('mouseout', () => {
//   card.classList.remove('active');
// });

const card = document.querySelector('.card');

card.addEventListener('mouseover', (event) => {
  if (!event.target.classList.contains('card__delete')) return;
  event.currentTarget.classList.add('active');
});

card.addEventListener('mouseout', (event) => {
  if (!event.target.classList.contains('card__delete')) return;
  event.currentTarget.classList.remove('active');
});
