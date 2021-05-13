// Пример 2 - Попап
// Дан простой скрытый попап.
// При нажатии на кнопку, показать попап,
// при нажатии на ESC скрыть

const openPopupBtn = document.querySelector('[open-popup-btn]');
const closePopupBtn = document.querySelector('[close-popup-btn]');
const popup = document.querySelector('.popup');

openPopupBtn.addEventListener('click', openPopup);

closePopupBtn.addEventListener('click', closePopup);

function openPopup() {
  popup.classList.remove('is-hidden');
  window.addEventListener('keydown', keyDownPopupHandler);
}

function closePopup() {
  popup.classList.add('is-hidden');
  window.removeEventListener('keydown', keyDownPopupHandler);
}

function keyDownPopupHandler(event) {
  if (event.key === 'Escape') {
    closePopup();
  }
}

setTimeout(openPopup, 5000);
setTimeout(closePopup, 12000);
