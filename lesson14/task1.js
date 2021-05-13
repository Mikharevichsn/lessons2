// 1 - Фокус
// Есть инпут. При потере фокуса,
// проверяем его, и если он пустой,
// красим границу в красный цвет!

const input = document.querySelector('.field-login');

// const inputBlurHandler = (e) => {
//   if (!checkIsInputValid(e.currentTarget.value)) {
//     input.classList.add('error');
//   } else {
//     input.classList.remove('error');
//   }
// };

// focus - получение фокуса
// blur - потеря фокуса

const checkIsInputValid = (value) => {
  if (!value) return;
  return value.trim().length >= 3;
};

// input.addEventListener('blur', (e) => {
//   if (!checkIsInputValid(e.currentTarget.value)) {
//     // e.currentTarget.classList.add('error');
//     input.classList.add('error');
//   } else {
//     input.classList.remove('error');
//   }
// });

input.addEventListener('blur', inputBlurHandler);

function inputBlurHandler(e) {
  if (!checkIsInputValid(e.currentTarget.value)) {
    input.classList.add('error');
  } else {
    input.classList.remove('error');
  }
}
