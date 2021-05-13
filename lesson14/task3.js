// Пример 3 - Ctrl
// Дан элемент.
// Сделайте так, чтобы по клику на него он красился в красный цвет,
// но только если в момент клика нажата клавиша Ctrl.

const box = document.querySelector('.box');

// let isAltKeyActive = false;

// box.addEventListener('click', (event) => {
//   if (isAltKeyActive) {
//     event.currentTarget.style.backgroundColor = 'red';
//   }
// });

// window.addEventListener('keydown', (event) => {
//   console.log(event);
//   isAltKeyActive = event.altKey;
// });

// window.addEventListener('keyup', (event) => {
//   console.log(event);
//   isAltKeyActive = event.altKey;
// });

window.addEventListener('keydown', (e) => {
  console.log(e);
  if (e.altKey) box.addEventListener('click', boxClickHandler);
});

window.addEventListener('keyup', () => {
  box.removeEventListener('click', boxClickHandler);
});

function boxClickHandler(event) {
  event.currentTarget.style.backgroundColor = 'red';
}
