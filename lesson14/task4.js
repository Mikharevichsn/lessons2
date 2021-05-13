// 4 - Инпут
// Дан инпут. В него вводится текст и нажимается клавиша Enter
// (ее код имеет номер 13).
// Сделайте так, чтобы по нажатию Enter
// введенный текст попадал в абзац под инпутом,
// а содержимое инпута очищалось.

const myForm = document.querySelector('.my-form');
const input = document.querySelector('input');
const p = document.querySelector('p');

myForm.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('случился сабмит!');
  p.textContent = input.value;
  input.value = '';
});
