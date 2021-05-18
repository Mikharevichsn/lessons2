// Пример 2 - Вывести 4 красных квадрата,
// при клике на любой, он становиться зеленым,
// при этом если есть уже зеленый квадрат,
// то он становиться обратно красным и так можно кликать на любой квадрат,
// он становиться зеленым, а старый зеленый квадрат обратно крассным и тд.

const parent = document.querySelector('.parent');
const blocks = document.querySelectorAll('.block');

function removeClassActive() {
  blocks.forEach((block) => {
    block.classList.remove('active');
  });
}

parent.addEventListener('click', (event) => {
  const isBlock = event.target.classList.contains('block');
  if (!isBlock) return;

  if (event.target.classList.contains('active')) {
    event.target.classList.remove('active');
  } else {
    removeClassActive();
    event.target.classList.add('active');
  }
});
